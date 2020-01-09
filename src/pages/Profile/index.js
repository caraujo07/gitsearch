import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ProjectTitle from "../../components/ProjectTitle";
import SearchBar from "../../components/SearchBar";
import { Container, Row, Col } from "../../Grid/";
import * as S from "./styled";

import organizationIcon from "../../assets/Icons/organization.svg";
import locationIcon from "../../assets/Icons/location.svg";
import repoIcon from "../../assets/Icons/repo.svg";
import followersIcon from "../../assets/Icons/followers.svg";
import starIcon from "../../assets/Icons/star.svg";

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
    repostars.push([
      repo.id,
      repo.name,
      repo.description,
      repo.stargazers_count,
      repo.html_url
    ]);
  });

  repostars.sort(function(a, b) {
    return b[3] - a[3];
  });

  let repocards = repostars.slice(0, 5);

  return (
    <Container>
      <Row>
        <Col desktop="12" mobile="12">
          <S.HeaderWrapper>
            <ProjectTitle />
            <SearchBar />
          </S.HeaderWrapper>
        </Col>
      </Row>
      <Row>
        <S.MainWrapper>
          <Col desktop="4" tablet="5">
            <S.ProfileInfos>
              <S.UserLink
                href={html_url}
                target="_blank"
                rel="noreferrer noopener"
                title={name}
              >
                <S.UserAvatar src={avatar_url} alt={name} />
                <S.UserName>{name}</S.UserName>
                <S.UserLogin>{login}</S.UserLogin>
              </S.UserLink>

              <S.UserInfo>
                <S.UserInfoItem>
                  <img
                    src={organizationIcon}
                    className="icon"
                    alt="Organization"
                  />
                  {company}
                </S.UserInfoItem>

                <S.UserInfoItem>
                  <img src={locationIcon} className="icon" alt="Location" />
                  {location}
                </S.UserInfoItem>

                <S.UserInfoItem>
                  <img src={starIcon} className="icon" alt="Stars" />

                  {stars}
                </S.UserInfoItem>

                <S.UserInfoItem>
                  <img src={repoIcon} className="icon" alt="Repositories" />

                  {public_repos}
                </S.UserInfoItem>

                <S.UserInfoItem>
                  <img src={followersIcon} className="icon" alt="Followers" />

                  {followers}
                </S.UserInfoItem>
              </S.UserInfo>
            </S.ProfileInfos>
          </Col>
          <Col desktop="8" tablet="7">
            <S.ContentWrapper>
              {repocards.map((repocard, i) => {
                return (
                  <S.RepoCard
                    href={repocard[4]}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={repocard[0]}
                  >
                    <S.RepoTitle>{repocard[1]}</S.RepoTitle>
                    <S.RepoDescription>{repocard[2]}</S.RepoDescription>
                    <S.RepoStars>
                      <img src={starIcon} className="icon" alt="Stars" />
                      {repocard[3]}
                    </S.RepoStars>
                  </S.RepoCard>
                );
              })}
            </S.ContentWrapper>
          </Col>
        </S.MainWrapper>
      </Row>

      {/*

        <S.MainWrapper>
          <SearchBar />

          {repocards.map((repocard, i) => {
            return (
              <S.RepoCard
                href={repocard[4]}
                target="_blank"
                rel="noreferrer noopener"
                key={repocard[0]}
              >
                <S.RepoTitle>{repocard[1]}</S.RepoTitle>
                <S.RepoDescription>{repocard[2]}</S.RepoDescription>
                <S.RepoStars>
                  <img src={starIcon} className="icon" alt="Stars" />
                  {repocard[3]}
                </S.RepoStars>
              </S.RepoCard>
            );
          })}
        </S.MainWrapper>
      </S.ProfileWrapper> */}
    </Container>
  );
}

export default Profile;
