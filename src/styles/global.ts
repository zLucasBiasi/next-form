import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${theme.colors.background};
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    html {
      font-size: 62.5%;
    }
  `}
`;

export const Container = styled.div`
  max-width: 125rem;
  padding: 0 3rem;
  margin: 0 auto;
  width: 100%;
`;
