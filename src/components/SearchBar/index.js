import React, { useState } from "react";
import { Search as SearchIcon } from "styled-icons/octicons/Search";

import ProjectTitle from "../ProjectTitle";

import * as S from "./styled";

const SearchBar = ({ history }) => {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    history.push("/profile");
  }

  return (
    <S.SearchWrapper>
      <ProjectTitle />

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
