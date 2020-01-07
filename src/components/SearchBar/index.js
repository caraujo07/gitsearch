import React, { useState } from "react";
import { Search as SearchIcon } from "styled-icons/octicons/Search";

import * as S from "./styled";

import api from "../../services/api";

const SearchBar = ({ history }) => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {};
    try {
      userData = await api.get(`/${username}`);
      history.push(`/profile/${username}`);
    } catch (err) {
      history.push(`/404`);
    }

    console.log(userData);
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

        <S.ButtonSearch type="submit">
          <SearchIcon />
        </S.ButtonSearch>
      </S.BarWrapper>
    </S.SearchWrapper>
  );
};

export default SearchBar;
