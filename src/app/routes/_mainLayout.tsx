import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Header } from "@widgets/header";
import { Menu } from "@widgets/menu";
import { useState } from "react";



export const Route = createFileRoute("/_mainLayout")({
  component: MainLayoutComponent,
});


function MainLayoutComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Header>
      <main className="main">
        <Outlet />
      </main>
      <div className="footer">Footer</div>
    </>
  );
}
