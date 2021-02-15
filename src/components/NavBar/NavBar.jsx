import CartWidget from "./CartWidget";
import { navbar, logo, options } from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={navbar}>
      <div className={logo}>EnergyCTRL</div>
      <ul className={options}>
        <li>
          <a href="/#">Bebidas</a>
        </li>
        <li>
          <a href="/#">Merch</a>
        </li>
        <li>
          <a href="/#">Gadgets</a>
        </li>
        <li>
          <a href="/#">Quienes Somos</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;