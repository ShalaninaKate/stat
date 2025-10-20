import { useState } from "react";
import { Input } from "./Input";
import { type InputProps } from "./types";
import s from "./Input.module.scss";
import { SvgIcon } from "../SvgIcon";

export function InputPassword({ error, ...props }: InputProps) {
  const [show, setShow] = useState(false);

  return (
    <Input type={show ? "text" : "password"} error={error} {...props}>
      <button
        type="button"
        className={s.input__btn}
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? (
          <SvgIcon className={s["input__btn-eye"]} name="icon-eye" />
        ) : (
          <SvgIcon className={s["input__btn-eye"]} name="icon-eye-off" />
        )}
      </button>
    </Input>
  );
}
