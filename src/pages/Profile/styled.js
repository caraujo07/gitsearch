import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  width: 1152px;
  height: 100vh;

  input {
    font-size: 20px;
  }
`

export const SidebarWrapper = styled.aside`
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  
  font-family: "Raleway", sans-serif;
  h1 {
    font-size: 40px;
    margin: 0;
  }
`

export const ProfileInfos = styled.section`
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 35px
    margin-bottom: 7px;
  }
`

export const UserLink = styled.a`
  text-decoration: none;

  &:hover {
    h1{
      color: #ac53f2;
    }
  }
`

export const UserAvatar = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
`

export const UserName = styled.h1`
  font-size: 35px;
  margin-bottom: 7px;
  color: #000;
`

export const UserLogin = styled.p`
  font-size: 20px;
  color: #5c5c5c;
`

export const UserInfo = styled.ul`
 margin-top: 33px;
`

export const UserInfoItem = styled.li`
 font-size: 20px;
 margin-bottom: 15px;
 display: flex;
 color: #5c5c5c;
 svg {
   width: 24px;
   height: 24px;
   margin-right: 7px;
   color: #000;
 }
`

export const MainWrapper = styled.section`
  padding: 35px 27px 0 67px;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif !important;

`

export const RepoCard = styled.a`
  margin-top: 50px;
  text-decoration: none;
  font-family: "Raleway", sans-serif !important;
  &:hover {
  text-decoration: none;
  cursor: pointer;
  h1 {
    opacity: .8;
  }
 }
`

export const RepoTitle = styled.h1`
color: #ac53f2;
font-size: 35px;
`

export const RepoDescription = styled.p`
 font-size: 20px;
 font-family: inherit;
 font-weight: 300;
 color: #000;
 margin: 5px 0 10px 0;
`
export const RepoStars = styled.span`
  display: flex;
  align-items: center;
  color: #5c5c5c;
  font-size: 20px;

  svg {
    color: #000;
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }
`