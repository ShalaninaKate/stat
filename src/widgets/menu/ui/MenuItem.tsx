import clsx from "clsx";
import { Link } from "@tanstack/react-router";
import { SvgIcon } from "@shared/ui/SvgIcon";
// import { useMediaQuery } from "@shared/lib/hooks/useMediaQuery";
import s from "./Menu.module.scss";
import { menuItems } from "../mocks/menuItems";

type MenuItemProps = {
  item: (typeof menuItems)[number];
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
};

export function MenuItem({
  item,
  index,
  openIndex,
  setOpenIndex,
}: MenuItemProps) {
  // const isMobile = useMediaQuery("(max-width: 991px)");
  const isOpen = openIndex === index;

  return (
    <li className={s.menu__item}>
      {item.subMenu ? (
        <button
          className={clsx(s.menu__link, isOpen && s["menu__link--active"])}
          onClick={() => {
            if (window.innerWidth < 992) {
              setOpenIndex(openIndex === index ? null : index);
            }
          }}
        >
          {item.label}
          <SvgIcon name="icon-arrow" className={s["menu__arrow-icon"]} />
        </button>
      ) : (
        <Link className={s.menu__link} to={item.to || "#"}>
          {item.label}
        </Link>
      )}

      {item.subMenu && (
        <ul
          className={clsx(
            s["menu__sub-list"],
            isOpen && s["menu__sub-list--visible"]
          )}
        >
          {item.subMenu.map((subItem, subIndex) => (
            <li key={subIndex} className={s["menu__sub-item"]}>
              <Link className={s["menu__sub-link"]} to={subItem.to}>
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
