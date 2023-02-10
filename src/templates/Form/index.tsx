import { SetStateAction, useState } from "react";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Container } from "@/styles/global";
import { Form } from "@/components/Form";

import * as S from "./styles";

export const FormTemplate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <Container>
        <Form>
          <Title title="Informações do Evento" />
          <Input
            type="text"
            label="Título do evento"
            rule="mínimo 8 caracteres"
          />
          <Input
            type="text"
            label="Link do evento"
            rule="comece com https://"
          />
          <Input
            type="text"
            label="Whatsapp para contato"
            rule="somente numeros"
          />
          <Textarea label="Informações extras" />
          <Select
            label="Categoria"
            options={["evento 1", "evento 2", "evento 3"]}
            value={selectedOption}
            setValue={(option: SetStateAction<string>) =>
              setSelectedOption(option)
            }
          />
          <Title title="Privacidade" />
          <Input
            type="text"
            label="E-mail do administrador"
            rule="digite um email válido"
          />
          <Input
            type="text"
            label="Senha de acesso para os participantes"
            rule="mínimo 8 caracteres"
          />
          <Checkbox label="Evento privado" />
          <Title title="Dia e hora" />
          <S.Wrapper>
            <Input label="Data" />
            <Input label="Das" placeholder="19:00" />
            <Input label="Até" placeholder="20:00" />
          </S.Wrapper>
          <S.ContainerButton>
            <Button type="submit">Salvar evento</Button>
          </S.ContainerButton>
        </Form>
      </Container>
    </>
  );
};
