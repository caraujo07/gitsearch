import React from "react";

import * as S from "./styled";

import SearchBar from "../../components/SearchBar";

const Home = ({ history }) => (
  <S.HomeWrapper>
    <SearchBar history={history} />;
  </S.HomeWrapper>
);

export default Home;
