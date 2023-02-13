import { useReducer, useState } from "react";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Container } from "@/styles/global";
import { Form } from "@/components/Form";

import { initialState, reducer } from "./reducer";

import * as S from "./styles";

export const FormTemplate = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Container>
        <Form>
          <Title>Informações do Evento</Title>
          <Input
            type="text"
            label="Título do evento"
            rule="mínimo 8 caracteres"
            value={state.titleEvent}
            onChange={({ target }) =>
              dispatch({ type: "SET_TITLE_EVENT", payload: target.value })
            }
          />
          <Input
            type="text"
            label="Link do evento"
            rule="comece com https://"
            value={state.linkEvent}
            onChange={({ target }) =>
              dispatch({ type: "SET_LINK_EVENT", payload: target.value })
            }
          />

          <Input
            type="text"
            label="Whatsapp para contato"
            rule="somente numeros"
            value={state.contact}
            onChange={({ target }) =>
              dispatch({ type: "SET_CONTACT", payload: target.value })
            }
          />

          <Textarea label="Informações extras" />
          <Select
            label="Categoria"
            options={["evento 1", "evento 2", "evento 3"]}
            value={selectedOption}
            setValue={(option) => setSelectedOption(option)}
          />

          <Title>Privacidade</Title>

          <Input
            type="text"
            label="E-mail do administrador"
            rule="digite um email válido"
            value={state.adminEmail}
            onChange={({ target }) =>
              dispatch({ type: "SET_ADMIN_EMAIL", payload: target.value })
            }
          />
          <Input
            type="text"
            label="Senha de acesso para os participantes"
            rule="mínimo 8 caracteres"
            value={state.accessPassword}
            onChange={({ target }) =>
              dispatch({ type: "SET_ACCESS_PASSWORD", payload: target.value })
            }
          />
          <Checkbox label="Evento privado" />

          <Title>Dia e hora</Title>

          <S.Wrapper>
            <Input
              label="Data"
              onChange={({ target }) =>
                dispatch({ type: "SET_DATA", payload: target.value })
              }
            />
            <Input
              label="Das"
              placeholder="19:00"
              onChange={({ target }) =>
                dispatch({ type: "SET_DATA_BEFORE", payload: target.value })
              }
            />
            <Input
              label="Até"
              placeholder="20:00"
              onChange={({ target }) =>
                dispatch({ type: "SET_DATA_AFTER", payload: target.value })
              }
            />
          </S.Wrapper>
          <S.ContainerButton>
            <Button type="submit">Salvar evento</Button>
          </S.ContainerButton>
        </Form>
      </Container>
    </>
  );
};
