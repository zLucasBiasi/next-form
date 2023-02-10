import { Container } from "@/styles/global";

import { SelectProps } from "./types";

import * as S from "./styles";

export const Select = ({ label, options }: SelectProps) => {
  return (
    <Container>
      <S.Label htmlFor={label}>
        <div> {label}</div>
        <S.Select name={label} id={label}>
          <option selected disabled>
            Tipo do evento
          </option>
          {options?.map((item, key) => (
            <option key={key}>{item}</option>
          ))}
        </S.Select>
      </S.Label>
    </Container>
  );
};
