import React from "react";

import * as S from "./styled";
import { Container, Row, Col } from "../../Grid/";

import ProjectTitle from "../../components/ProjectTitle";
import SearchBar from "../../components/SearchBar";

const Home = ({ history }) => (
  <Container>
    <Row>
      <Col desktop="12" tablet="6" mobile="12">
        <S.HomeWrapper>
          <ProjectTitle />
          <SearchBar history={history} />
        </S.HomeWrapper>
      </Col>
    </Row>
  </Container>
);

export default Home;
