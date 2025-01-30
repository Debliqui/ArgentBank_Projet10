import { NavLink } from "react-router"
import argentBankLogo from "../../../assets/img/argentBankLogo.png"
import "./index.scss"

export default function Header() {
  return (
    <header>
      <nav className="header__navBar">
        <NavLink className="header__navBar__logo" to="/">
          <img
            className="header__navBar__logo__image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="header__navBar__item" to="/sign-in">
            <i className="fa fa-user-circle" />
            <span>Sign In</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
