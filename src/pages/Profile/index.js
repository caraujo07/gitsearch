import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ProjectTitle from '../../components/ProjectTitle';
import SearchBar from '../../components/SearchBar';
import * as S from './styled';

import { ShapeCircle as OrganizationIcon } from 'styled-icons/boxicons-regular/ShapeCircle';
import { Planet as PlanetIcon } from 'styled-icons/boxicons-regular/Planet';
import { Star as StarIcon } from 'styled-icons/fa-regular/Star';
import { PackageIcon as BoxIcon } from 'styled-icons/boxicons-regular/PackageIcon';
import { PeopleOutline as FollowersIcon } from 'styled-icons/material/PeopleOutline';

import api from "../../services/api";

function Profile({ match }) {
  let history = useHistory();

  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadUserData() {
      try {
        const userData = await api.get(`/${match.params.username}`);
        const reposData = await api.get(
          `/${match.params.username}/repos?per_page=100`
        );
        setUser(userData.data);
        setRepos(reposData.data);
        console.log(match.url);
        return { userData, reposData };
      } catch (error) {
        history.push("/404");
      }
    }

    loadUserData();
  }, [match.params.username, history, match]);

  const {
    avatar_url,
    company,
    followers,
    location,
    name,
    login,
    public_repos
  } = user;

  let stars = 0;
  repos.forEach(repo => {
    stars = stars + repo.stargazers_count;
  });

  return (
    <S.ProfileWrapper>

    <S.SidebarWrapper>
      <ProjectTitle />

      <S.ProfileInfos>
        <S.UserAvatar src={avatar_url} />
        <S.UserName>{name}</S.UserName>
        <S.UserLogin>{login}</S.UserLogin>

        <S.UserInfo>

          <S.UserInfoItem>
            <OrganizationIcon />{company}
          </S.UserInfoItem>

          <S.UserInfoItem>
            <PlanetIcon />{location}
          </S.UserInfoItem>

          <S.UserInfoItem>
            <StarIcon />{stars}
          </S.UserInfoItem>

          <S.UserInfoItem>
            <BoxIcon />{public_repos}
          </S.UserInfoItem>

          <S.UserInfoItem>
            <FollowersIcon />{followers}
          </S.UserInfoItem>

        </S.UserInfo>

      </S.ProfileInfos>

    </S.SidebarWrapper>

    <S.MainWrapper>
      <SearchBar />
    </S.MainWrapper>

      {/* <h1>{match.params.username}</h1>
      <ul>
        <li>{avatar_url}</li>
        <li>{company}</li>
        <li>{followers}</li>
        <li>{location}</li>
        <li>{name}</li>
        <li>{login}</li>
        <li>{stars}</li>
        <li>{public_repos}</li>
      </ul> */}
    </S.ProfileWrapper>
  );
}

export default Profile;
