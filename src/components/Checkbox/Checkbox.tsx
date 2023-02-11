import { CheckboxProps } from "./types";

import { Container } from "@/styles/global";

import * as S from "./styles";

export const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        <S.Input type="checkbox" id={label} />
        {label}
      </S.Label>
    </Container>
  );
};
