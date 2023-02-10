import { ButtonProps } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Button = ({ children, ...rest }: ButtonProps) => (
  <Container>
    <S.Button {...rest}>{children}</S.Button>
  </Container>
);
