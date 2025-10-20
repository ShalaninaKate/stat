import s from "./Menu.module.scss";

import { menuItems } from "../mocks/menuItems";
import clsx from "clsx";
// import { Link } from "@tanstack/react-router";

// import { SvgIcon } from "@shared/ui/SvgIcon";
import { MenuItem } from "./MenuItem";
import { useMenu } from "../model/useMenu";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Menu({ menuOpen, setMenuOpen }: Props) {
  const { openIndex, setOpenIndex, menuRef } = useMenu(setMenuOpen);

  return (
    <div className={s.menu}>
      <nav className={clsx(s.menu__body, menuOpen && s._active)}>
        <ul className={s.menu__list} ref={menuRef}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
