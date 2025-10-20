
import s from './Logo.module.scss';
import { Link } from "@tanstack/react-router";
import logo from '/img/svg/logo.svg';

export function Logo(){
  return (
   <Link className={s.logo} to='/'>
     <img className={s.logo__icon} src={logo} alt=""/>
   </Link>
  )
  }; 