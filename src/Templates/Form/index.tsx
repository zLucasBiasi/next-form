import { SetStateAction, useState } from "react";

import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Title } from "@/components/Title";

export const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <Title title="Informações do Evento" />

      <Input type="text" label="Título do evento" rule="mínimo 8 caracteres" />
      <Input type="text" label="Link do evento" rule="comece com https://" />
      <Input type="text" label="Whatsapp para contato" rule="somente numeros" />

      <Textarea label="Informações extras" />

      <Select
        label="Categoria"
        options={["evento 1", "evento 2", "evento 3"]}
        value={selectedOption}
        setValue={(option: SetStateAction<string>) => setSelectedOption(option)}
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
    </>
  );
};