import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/icons/Reversipe-Logo.svg";
import MenuIcon from "../../assets/icons/Menu-Icon.svg";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";




function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                        <img 
                            src={MenuIcon} 
                            alt="Menu Icon"
                            className="header__menu-icon"
                            onClick={toggleMenu}
                            />
                    </div>

            </nav>

            {isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} />}

        </header>
    );
    




}

export default Header;