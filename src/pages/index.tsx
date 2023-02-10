import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Title } from "@/components/Title";

export default function Home() {
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
      <Input type="text" label="Whatsapp para contato" rule="somente numeros" />

      <Title title="Dia e hora" />
    </>
  );
}
