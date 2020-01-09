import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-top: 22%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 499px) {
    h1 {
      font-size: 40px;
    }
  }
`;
