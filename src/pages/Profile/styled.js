import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  padding: 0 20px 0 25px;
  h1 {
    font-size: 40px;
    text-align: center;
  }
  input {
    width: 87%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileInfos = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Raleway", sans-serif;

  h1 {
    font-size: 35px;
    margin-bottom: 7px;
  }
  img.icon {
    width: 24px;
    height: 24px;
    margin-right: 7px;
    color: #000;
  }
`;

export const UserLink = styled.a`
  text-decoration: none;

  &:hover {
    h1 {
      color: #ac53f2;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

export const UserName = styled.h1`
  font-size: 35px;
  margin-bottom: 7px;
  color: #000;
`;

export const UserLogin = styled.p`
  font-size: 20px;
  color: #5c5c5c;
`;

export const UserInfo = styled.ul`
  margin-top: 33px;
`;

export const UserInfoItem = styled.li`
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  color: #5c5c5c;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif !important;

  @media only screen and (min-width: 768px) and (max-width: 999px) {
    margin-left: 30px;
  }

  @media only screen and (max-width: 499px) {
    padding: 0 25px;
    margin-top: 40px;
  }
`;

export const RepoCard = styled.a`
  :not(:first-child) {
    margin-top: 30px;
  }
  text-decoration: none;
  font-family: "Raleway", sans-serif !important;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    h1 {
      opacity: 0.8;
    }
  }
`;

export const RepoTitle = styled.h1`
  color: #ac53f2;
  font-size: 35px;
`;

export const RepoDescription = styled.p`
  font-size: 20px;
  font-family: inherit;
  font-weight: 300;
  color: #000;
  margin: 5px 0 10px 0;
`;
export const RepoStars = styled.span`
  display: flex;
  align-items: center;
  color: #5c5c5c;
  font-size: 20px;

  img.icon {
    color: #000;
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }
`;

export const MainWrapper = styled.section`
  margin-top: 30px;
`;
