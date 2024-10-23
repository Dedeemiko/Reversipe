import React from "react";

import { useNavigate } from "react-router-dom";


function HomePageContent() {

    const userName = "Dede";
    const navigate = useNavigate();

    return (
        <div className="homepage-content">
            <h2>Welcome {userName}</h2>
            <p>What would you like to do today?</p>

            <div className="homepage-content__options">
                <card
                    title="Search by Ingredients"
                    imageSrc=""
                    onClick={() => navigate("/search-by-ingredients")}
                />

                <card
                    title="Search by Recipe"
                    imageSrc=""
                    onClick={() => navigate("/search-by-recipe")}
                />  
            </div>
        </div>
    );
}

export default HomePageContent;