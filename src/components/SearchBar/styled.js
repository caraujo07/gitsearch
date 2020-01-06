import styled from "styled-components";

export const SearchWrapper = styled.section`
  margin-top: 20rem;
  width: 750px;
  display: flex;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  width: 86.64%;
  height: 48px;
  font-size: 1.4rem;
  color: #5c5c5c;
  font-family: "Raleway", sans-serif;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
`;

export const ButtonSearch = styled.button`
  width: 13.36%;
  height: 50px;
  background-color: #ac53f2;
  border: 0;
  cursor: pointer;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  &:hover {
    background-color: #84e;
    transition: all 0.2s ease-in-out;
  }
  svg {
    transform: rotate(90deg);
    width: 30px;
    color: #fff;
  }
`;

export const BarWrapper = styled.form`
  display: flex;
  width: 100%;
  max-width: 100%;
`;
