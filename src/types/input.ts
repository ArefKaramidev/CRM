import { ChangeEvent, ReactNode } from "react";

export type InputT = {
  name?: string;
  type: string;
  placeHolder: string;
  icon?: ReactNode;
  inputStyle: string;
  parentStyle?: string;
  value?: string;
  requiredInput?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
