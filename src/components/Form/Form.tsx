import { handleSubmit } from "./functions/handleSubmit";
import { FormProps } from "./types";

export const Form = ({ children }: FormProps) => (
  <form onSubmit={handleSubmit}>{children}</form>
);
