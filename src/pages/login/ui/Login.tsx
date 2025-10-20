import s from "./Login.module.scss";
import formStyles from "@shared/ui/form/Form.module.scss";
import clsx from "clsx";
import { Link } from "@tanstack/react-router";
import { SvgIcon } from "@shared/ui/SvgIcon";
import { Button } from "@shared/ui/Button";
import { InputEmail } from "@shared/ui/input/inputEmail";
import { InputPassword } from "@shared/ui/input/inputPassword";

export function Login() {
  return (
    <main className={clsx(s.authorization, s["authorization--login"])}>
      <div className={clsx(s.authorization__content, s["authorization__content--login"])}>
        <div className={s.authorization__inset}>
          <div className={s.authorization__header}>
            <Link className={s.authorization__logo} to="/">
              <SvgIcon
                name="icon-logo"
                className={s["authorization__logo-icon"]}
              ></SvgIcon>
            </Link>
          </div>
          <form
            action="#"
            method="post"
            className={clsx(s["authorization__form"], formStyles.form)}
          >
            <h2 className={s.authorization__title}>Login to TrustScore</h2>
            <div
              className={clsx(s.authorization__items, formStyles.form__items)}
            >
              <div className={formStyles.form__item}>
                <InputEmail error={'error'} type="email" placeholder="Email" />
              </div>
              <div className={formStyles.form__item}>
                <InputPassword placeholder="Password" />
              </div>
            </div>
            <Button
              className={clsx(s.authorization__button, formStyles.form__button)}
              type="button"
            >
              Login
            </Button>

            <div className={s.authorization__socials}>
              <span className={s["authorization__socials-text"]}>
                Sign Up with Social Account
              </span>
              <ul className={s["authorization__socials-items"]}>
                <li className={s["authorization__socials-item"]}>
                  <Link to="/" className={s["authorization__socials-link"]}>
                    <SvgIcon
                      className={s["authorization__socials-link-icon"]}
                      name="icon-google"
                    />
                  </Link>
                </li>
                <li className={s["authorization__socials-item"]}>
                  <Link to="/" className={s["authorization__socials-link"]}>
                    <SvgIcon
                      className={s["authorization__socials-link-icon"]}
                      name="icon-twitter"
                    />
                  </Link>
                </li>
                <li className={s["authorization__socials-item"]}>
                  <Link to="/" className={s["authorization__socials-link"]}>
                    <SvgIcon
                      className={s["authorization__socials-link-icon"]}
                      name="icon-facebook"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
