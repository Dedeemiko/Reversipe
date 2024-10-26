import React from "react"
import { Link } from "react-router-dom";
import "./Menu.scss";
import CloseIcon from "../../assets/icons/Close-Icon.svg";
import IngredientIcon from "../../assets/icons/Ingredient-Icon.svg";
import RecipeIcon from "../../assets/icons/Recipe-Icon.svg";
import AccountIcon from "../../assets/icons/Account-Icon.svg";


const Menu = ({ closeMenu }) => {

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains("menu-overlay")) {
            closeMenu();
        }
    };

    return (
        <div className="menu-overlay" onClick={handleOverlayClick}>
            <div className="menu" onClick={(e) => e.stopPropagation()}>
                <div className="menu__header">
                    <img 
                        src={CloseIcon}
                        alt="Close Menu"
                        className="menu__close-icon"
                        onClick={closeMenu}
                    />
                </div>
            
                <ul>
                    <Link to="/search-by-ingredients" className="menu__list">
                        <img src={IngredientIcon} alt="Search by ingredients icon" />
                        <li onClick={closeMenu}>Search by ingredients</li>
                    </Link>
                    <Link to="/search-by-recipe" className="menu__list">
                        <img src={RecipeIcon} alt="Search by recipe icon" />
                        <li onClick={closeMenu}>Search by recipe</li>
                    </Link>
                    <Link to="/search-by-ingredients" className="menu__list">
                        <img src={AccountIcon} alt="Account icon" />
                        <li onClick={closeMenu}>Account</li>
                    </Link>
                </ul>

            </div>
        </div>
    );
    




}

export default Menu;