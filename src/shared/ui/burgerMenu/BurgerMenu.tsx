import s from "./BurgerMenu.module.scss";
import clsx from "clsx";

type Props = {
  isActive: boolean;
  toggle: () => void;
};

export function BurgerMenu({ isActive, toggle }: Props) {
  return (
    <button
      type="button"
      className={clsx(s["icon-menu"], isActive && s._active)}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
