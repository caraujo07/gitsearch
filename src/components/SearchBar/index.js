import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Search as SearchIcon } from "styled-icons/octicons/Search";
import * as S from "./styled";

import api from "../../services/api";

const SearchBar = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    api
      .get(`/${username}`)
      .then(response => {
        history.push(`/profile/${username}`);
      })
      .catch(error => {
        history.push("/404");
      });
  }
  

  return (
    <S.SearchWrapper>
      <S.BarWrapper onSubmit={handleSubmit}>
        <S.InputSearch
          type="text"
          placeholder="Type your GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <S.ButtonSearch type="submit" title="Search">
          <SearchIcon />
        </S.ButtonSearch>
      </S.BarWrapper>
    </S.SearchWrapper>
  );
};

export default SearchBar;
