import { useState, useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useClickOutside } from "@shared/hooks/useClickOutside";


export function useMenu(setMenuOpen: (open: boolean) => void) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const routerState = useRouterState();


    useClickOutside(menuRef, () => {
    setOpenIndex((prevIndex) => (prevIndex !== null ? null : prevIndex));
  });


  // Закрытие меню при смене роута
  useEffect(() => {
    setMenuOpen(false);
    setOpenIndex(null);
  }, [routerState.location, setMenuOpen]);

  return {
    openIndex,
    setOpenIndex,
    menuRef,
  };
}
