import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  width: 1152px;
  height: 100vh;

  input {
    font-size: 20px;
  }
  a {
    width: 280px;
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


export const MainWrapper = styled.section`
  padding: 35px 27px 0 67px;
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif !important;
`

export const NotFoundMsg = styled.h1`
  color: #ac53f2;
  font-size: 40px;
  margin-top: 125px;
`
