import React, { useState, useEffect } from "react";

import api from "../../services/api";

function Profile({ match }) {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadUserData() {
      const userData = await api.get(`/${match.params.username}`);
      const reposData = await api.get(
        `/${match.params.username}/repos?per_page=100`
      );

      setUser(userData.data);
      setRepos(reposData.data);
    }
    loadUserData();
  }, [match.params.username]);

  const {
    avatar_url,
    company,
    followers,
    location,
    name,
    login,
    public_repos
  } = user;

  console.log(user);
  console.log(repos);

  let stars = 0;
  repos.forEach(repo => {
    stars = stars + repo.stargazers_count;
  });

  return (
    <>
      <h1>{match.params.username}</h1>
      <ul>
        <li>{company}</li>
        <li>{followers}</li>
        <li>{location}</li>
        <li>{name}</li>
        <li>{login}</li>
        <li>{stars}</li>
        <li>{public_repos}</li>
      </ul>
    </>
  );
}

export default Profile;
