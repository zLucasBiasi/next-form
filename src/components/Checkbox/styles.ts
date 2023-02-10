import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    border: 0.1rem solid ${theme.colors.ligth_gray};
    border-radius: 0.4rem;
    &:checked {
      appearance: checkbox;
    }
  `}
`;

export const Label = styled.label`
  width: 14rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.6rem 0;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
`;
