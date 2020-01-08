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
    public_repos,
    html_url
  } = user;

  let stars = 0;
  let repostars = [];
  repos.forEach(repo => {
    stars = stars + repo.stargazers_count;
    repostars.push([repo.name, repo.description, repo.stargazers_count, repo.html_url]);
  });

  repostars.sort(function(a, b){
    return b[2]-a[2]}
    )

  let repocards = repostars.slice(0, 5);

  return (
    <S.ProfileWrapper>

    <S.SidebarWrapper>
      <ProjectTitle />

      <S.ProfileInfos>
        <S.UserLink href={html_url} target="_blank" rel="noreferrer noopener" title={name}>
          <S.UserAvatar src={avatar_url} alt={name}/>
          <S.UserName>{name}</S.UserName>
          <S.UserLogin>{login}</S.UserLogin>
        </S.UserLink>

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

        {
          repocards.map((repocard, i) => {
            return(
              <S.RepoCard href={repocard[3]} target="_blank" rel="noreferrer noopener" key={i}>
                <S.RepoTitle>{repocard[0]}</S.RepoTitle>
                <S.RepoDescription>{repocard[1]}</S.RepoDescription>
                <S.RepoStars>
                  <StarIcon /> {repocard[2]}
                </S.RepoStars>
              </S.RepoCard>
            );
          })
        }

    </S.MainWrapper>

    </S.ProfileWrapper>
  );
}

export default Profile;
