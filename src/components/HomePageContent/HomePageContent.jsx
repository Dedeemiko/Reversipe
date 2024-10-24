import React from "react";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import recipeImage from "../../assets/images/pancake-img.jpg"
import ingredientImage from "../../assets/images/ingredients-img.jpg"


function HomePageContent() {

    const userName = "Dede";
    const navigate = useNavigate();

    return (
        <div className="homepage-content">
            <h2>Welcome {userName}</h2>
            <p>What would you like to do today?</p>

            <div className="homepage-content__options">
                <Card
                    title="Search by Ingredients"
                    imageSrc={ingredientImage}
                    onClick={() => navigate("/search-by-ingredients")}
                />

                <Card
                    title="Search by Recipe"
                    imageSrc={recipeImage}
                    onClick={() => navigate("/search-by-recipe")}
                />  
            </div>
        </div>
    );
}

export default HomePageContent;