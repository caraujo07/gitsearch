import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  width: 1152px;
  height: 100vh;
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

export const UserAvatar = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 12px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
`

export const UserName = styled.h1`
  font-size: 35px;
  margin-bottom: 7px;
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
`

export const RepoCard = styled.section`
 margin-top: 50px;
`

export const RepoTitle = styled.h1`
color: #84e;
`