import React from "react";

import ProjectTitle from "../../components/ProjectTitle";
import SearchBar from "../../components/SearchBar";
import * as S from "./styled";

import { Container, Row, Col } from "../../assets/Grid";

function Profile() {
  return (
    <Container>
      <Row>
        <Col desktop="12">
          <S.HeaderWrapper>
            <ProjectTitle />
            <SearchBar />
          </S.HeaderWrapper>
        </Col>
        <Col desktop="12">
          <S.NotFoundMsg>404! User not found! :(</S.NotFoundMsg>
        </Col>

        {/* <S.ProfileWrapper>
          <S.SidebarWrapper></S.SidebarWrapper>
          
          <S.MainWrapper></S.MainWrapper>
        </S.ProfileWrapper> */}
      </Row>
    </Container>
  );
}

export default Profile;
