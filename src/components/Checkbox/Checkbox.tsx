import { Container } from "@/styles/global";
import * as S from "./styles";
import { CheckboxProps } from "./types";

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
