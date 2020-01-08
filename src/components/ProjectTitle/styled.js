import styled from "styled-components";

export const ProjectTitle = styled.h1`
  font-size: 60px;
  font-family: Monaco, "Share Tech Mono", monospace;
  margin: 10px auto;
  span {
    font-family: "Raleway", sans-serif;
    font-weight: 200;
    font-style: italic;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: #000

  &:hover {
    opacity: 0.8;
  }
`
