import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  h1 {
    font-size: 40px;
  }
  input {
    width: 87%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NotFoundMsg = styled.h1`
  color: #ac53f2;
  text-align: center;
  font-size: 40px;
  margin-top: 125px;
`;
