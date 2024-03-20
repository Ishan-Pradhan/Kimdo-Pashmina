import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <img className="h-14" src="/images/Logo.svg" alt="" />
    </NavLink>
  );
}

export default Logo;
