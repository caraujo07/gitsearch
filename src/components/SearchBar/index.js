import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import searchIcon from "../../assets/Icons/search.svg";
import * as S from "./styled";

import api from "../../services/api";

const SearchBar = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    api
      .get(`/${username}`)
      .then(() => {
        history.push(`/profile/${username}`);
      })
      .catch(() => {
        history.push("/404");
      });
  }

  return (
    <S.BarWrapper onSubmit={handleSubmit}>
      <S.InputSearch
        type="text"
        placeholder="Type your username"
        tabindex="-1"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <S.ButtonSearch type="submit" title="Search">
        <img src={searchIcon} alt="search" />
      </S.ButtonSearch>
    </S.BarWrapper>
  );
};

export default SearchBar;
