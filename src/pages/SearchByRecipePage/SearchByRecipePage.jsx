import React, { useState } from "react";
import axios from "axios";
import SearchInput from "../../components/SearchInput/SearchInput";
import Button from "../../components/Button/Button";
import { baseUrl } from "../../utils/api";
import { Link } from "react-router-dom";
import "./SearchByRecipePage.scss";


function SearchByRecipePage() {
    const [searchItem, setSearchItem] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");
    const [attemptSearch, setAttemptSeacrh] = useState(false);

    
    const handleInputChange = (value) => {
        setSearchItem(value);
        if (error) {
            setError("");
        }
    };

    const handleSearch = async () => {
        if (!searchItem.trim()) {
            setError("Please enter a recipe to search for");
            return;
        } 

        setError("");
        
        setAttemptSeacrh(true);

        try {
            const response = await axios.get(`${baseUrl}api/recipes/search`, { params: { name: searchItem },
            });
            setRecipes(response.data);
            
        } catch (error) {
            console.error("Error searching for recipes", error);
        }
        
    };

    return (
        <div className="search-recipe">
            <h2>Search by Recipe</h2>

            <div className="search-recipe__options">
                <SearchInput
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder="Search Recipe..."
                    errorMessage={error}
                />

                <Button
                    buttonType="primary"
                    text="Search"
                    handleClick={handleSearch}
                />
            </div>

            <div className="search-recipe__results">
                {recipes.length > 0 ? (
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id}
                            className="search-recipe__list">
                                <div className="search-recipe__image">
                                        <img src={recipe.picture_link} alt={recipe.title} />
                                </div>

                                <div className="search-recipe__list-details">
                                    <Link to={`/recipe/${recipe.id}`} className="search-ingredients__link">
                                        <h3>{recipe.title}</h3>
                                    </Link>

                                    <p>Estimated Time: {recipe.estimated_time} minutes</p>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                ) : (

                    attemptSearch && <p>No recipes found</p>
                )}


            </div>
        </div>
    )
};

export default SearchByRecipePage;