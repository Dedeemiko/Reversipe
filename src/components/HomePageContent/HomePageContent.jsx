import React, { useState } from "react";
import "./HomePageContent.scss";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import recipeImage from "../../assets/images/pancake-img.jpg"
import ingredientImage from "../../assets/images/ingredients-img.jpg"


function HomePageContent() {

    const [loading, setLoading] = useState(false);
    const userName = "Dede";
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setLoading(true);
        navigate(path);
    };

    return (
        <div className="homepage-content">
            <h2>Hello {userName}</h2>
            <p>What would you like to do today?</p>

            {loading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading...</p>
                </div>
            )}

            <div className={`homepage-content__options ${loading ? "loading" : ''}`}>
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