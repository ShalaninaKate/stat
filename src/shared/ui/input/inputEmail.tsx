
import { Input } from "./Input";
import { type InputProps } from "./types";

export function InputEmail({ error, ...props }: InputProps) {
  return <Input type="email" {...props} error={error} />;
}
