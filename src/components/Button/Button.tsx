import React, { JSX, MouseEventHandler, ReactNode } from "react";
import { ButtonStyled } from "./Button.styled";

export type TButtonProps = {
  variant: "primary" | "secondary";
  children: ReactNode;
  size?: "small" | "medium" | "large";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<TButtonProps> = ({
  size = "medium",
  children,
  variant = "primary",
  onClick,
}: TButtonProps) => {
  return (
    <ButtonStyled variant={variant} size={size} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
