import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ProjectTitle from '../../components/ProjectTitle';
import SearchBar from '../../components/SearchBar';
import * as S from './styled';




function Profile({ match }) {


  return (
    <S.ProfileWrapper>

      <S.SidebarWrapper>
        <ProjectTitle />
      </S.SidebarWrapper>

    <S.MainWrapper>

      <SearchBar />
      <S.NotFoundMsg>404! User not found! :(</S.NotFoundMsg>

    </S.MainWrapper>

    </S.ProfileWrapper>
  );
}

export default Profile;
