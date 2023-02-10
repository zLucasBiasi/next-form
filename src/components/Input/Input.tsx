import { Container } from "@/styles/global";
import { InputProps } from "./types";

import * as S from "./styles";

export const Input = ({ label, type, rule }: InputProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        <div>
          {label} <S.Rule>({rule})</S.Rule>
        </div>
        <S.Input type={type} id={label} />
      </S.Label>
    </Container>
  );
};
