import React, { useState } from "react";
import { Search as SearchIcon } from "styled-icons/octicons/Search";

import * as S from "./styled";

import api from "../../services/api";

const SearchBar = ({ history }) => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    history.push(`/profile/${username}`);
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
