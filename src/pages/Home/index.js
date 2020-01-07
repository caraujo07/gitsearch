import React from "react";

import * as S from "./styled";
import ProjectTitle from "../../components/ProjectTitle";
import SearchBar from "../../components/SearchBar";

const Home = ({ history }) => (
  <S.HomeWrapper>
    <ProjectTitle />
    <SearchBar history={history} />
  </S.HomeWrapper>
);

export default Home;
