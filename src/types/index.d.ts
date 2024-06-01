import { CSSProperties } from "react";

export interface CustomButtonProps {
  title: string;
  style?: CSSProperties;
  buttonType: string;
  handleClick: () => void;
}

export interface CustomInputProps {
  title: string;
  classes?: string;
  style?: CSSProperties;
}
