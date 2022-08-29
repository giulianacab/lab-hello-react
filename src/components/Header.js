import logoIcon from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png";
import style from "./Header.module.css";

function Header() {
  return (
    
        <div className="headerBlock">

            <div id="logo">
                <img
                    className={style.icon}
                    src={logoIcon}
                    alt="logo"
                />
            </div>
            
            <div id="menu">

                <img
                    className={style.icon}
                    src={menuIcon}
                    alt="menu"
                />
            </div>

        </div>
    
  );
}

export default Header;