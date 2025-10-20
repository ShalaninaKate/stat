
import clsx from "clsx";
import s from "./Input.module.scss";

import { type InputProps } from "./types";



export function Input({ className, children, error, ...props }: InputProps) {
  return (
    <div className={clsx(s.inputWrapper, error && s.inputWrapperError)}>
      <div className={clsx(s.input, className)}>
        <input className={s.input__control} {...props} />
        {children}
      </div>
      {error && <span className={s["error-text"]}>{error}</span>}
    </div>
  );
};
