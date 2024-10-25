import "./Header.scss";
import logo from "../../assets/icons/Reversipe-Logo.svg";
import MenuIcon from "../../assets/icons/Menu-Icon.svg";
import { Link } from "react-router-dom"



function Header() {

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo-container">

                    <Link to="/" className="header__logo">
                            <img
                                src={logo}
                                alt="Reversipe logo"
                                className="header__logo-img"
                            />
                    </Link>
                </div>

                    <div className="header__menu">
                        <img src={MenuIcon} />
                    </div>

                

            </nav>
        
        </header>
    );
    




}

export default Header;