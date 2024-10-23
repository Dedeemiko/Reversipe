import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";


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
                    imageSrc=""
                    onClick={() => navigate("/search-by-ingredients")}
                />

                <Card
                    title="Search by Recipe"
                    imageSrc=""
                    onClick={() => navigate("/search-by-recipe")}
                />  
            </div>
        </div>
    );
}

export default HomePageContent;