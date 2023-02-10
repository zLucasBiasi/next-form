import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 5.6rem;
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.4rem;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: 0.5s;
    text-transform: uppercase;

    &:hover {
      box-shadow: 1px 1px 6px 1px green;
    }
  `}
`;
