import { ReactNode } from "react";

export type InputT = {
  type: string;
  placeHolder: string;
  icon?: ReactNode;
  inputStyle: string;
  parentStyle?: string;
};
