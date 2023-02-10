import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
