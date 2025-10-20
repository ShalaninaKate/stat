

import React from "react";
import { Link as RouterLink } from "@tanstack/react-router";
import type { LinkProps as RouterLinkProps } from "@tanstack/react-router";
import clsx from "clsx";
import s from "./Button.module.scss";

type Variant =
  | "default"
  | "ghost"
  | "transparent"
  | "white"
  | "wh"
  | "border"
  | "red-border";

// Пропсы для обычной кнопки
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

// Пропсы для TanStack Router Link
type ButtonLinkProps = Omit<RouterLinkProps, "className"> & {
  variant?: Variant;
  className?: string;
};

// Универсальный компонент
type Props = (ButtonProps & { as?: "button" }) | (ButtonLinkProps & { as: typeof RouterLink });

export const Button: React.FC<Props> = ({ as = "button", variant = "default", className, ...props }) => {
  const classes = clsx(s.button, variant !== "default" && s[`button--${variant}`], className);

  if (as === RouterLink) {
    const linkProps = props as ButtonLinkProps;
    return <RouterLink className={classes} {...linkProps} />;
  }

  const buttonProps = props as ButtonProps;
  return <button className={classes} {...buttonProps} />;
};
