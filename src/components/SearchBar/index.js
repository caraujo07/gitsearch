import React from "react";
import { Search as SearchIcon } from "styled-icons/octicons/Search";

import ProjectTitle from "../ProjectTitle";

import * as S from "./styled";

const SearchBar = () => (
  <S.SearchWrapper>
    <ProjectTitle />

    <S.BarWrapper>
      
      <S.InputSearch type="text" />

      <S.ButtonSearch>
        <SearchIcon />
      </S.ButtonSearch>

    </S.BarWrapper>

  </S.SearchWrapper>
);

export default SearchBar;
