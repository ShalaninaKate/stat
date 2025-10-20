import { Link } from "@tanstack/react-router";
import "./Header.scss";
import s from "./Header.module.scss";
import { Button } from "@shared/ui/Button";
import { Logo } from "@shared/ui/Logo";
import { BurgerMenu } from "@shared/ui/burgerMenu";
import { useBodyLock } from "@shared/hooks/useBodyLock";


type Props = {
  children: React.ReactElement<{
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
  }>;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({ children, menuOpen, setMenuOpen }: Props) {
  // const [menuOpen, setMenuOpen] = useState(false);

useBodyLock(menuOpen);

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__menu">
          {children}
          {/* {
            cloneElement(children, { menuOpen, setMenuOpen }) // прокидываем пропсы в Menu
          } */}
        </div>

        <div className={s.header__actions}>
          <Button as={Link} className={s.header__action} variant="transparent" to='/login'>
            Login
          </Button>
          <Button as={Link} className={s.header__action} to="/login">
            Sign Up
          </Button>
        </div>
        <BurgerMenu isActive={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </div>
    </header>
  );
}
