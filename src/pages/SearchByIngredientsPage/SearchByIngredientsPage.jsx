import React, { useState } from "react";
import axios from "axios";
import SearchInput from "../../components/SearchInput/SearchInput";
import Button from "../../components/Button/Button";
import { baseUrl } from "../../utils/api";
import { Link } from "react-router-dom";
import "./SearchByIngredientsPage.scss";


function SearchByIngredientsPage() {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [inputError, setInputError] = useState("");
    const [notFoundError, setNotFoundError] = useState("");


    const handleSearch = async () => {

        setNotFoundError("");

        if (!ingredients.trim()) {
            setInputError("Please provide ingredients to search for.");
            return;
        }

        if (!ingredients.includes(",")) {
            setInputError("Please separate multiple ingredients with commas.");
            return;
        }
        
        setInputError("");

        
        try {
            const response = await axios.get(`${baseUrl}api/recipes/ingredients-search`, { params: { ingredients },
            });

            if (response.data.length === 0) {
                setNotFoundError("Recipe not found with ingredient(s) provided.");
                setRecipes([]);
            } else {
                setNotFoundError("");
                setRecipes(response.data);
            }
        } catch (error) {
            console.error("Error searching for recipes", error);
        }
    };

    const handleInputChange = (value) => {
        setIngredients(value);
        if (inputError) {
            setInputError("");
        }
    };

    return (
        <div className="search-ingredients">
            <h2>Search by Ingredients</h2>

            <div className="search-ingredients__options">
                <SearchInput
                    value={ingredients}
                    onChange={handleInputChange}
                    placeholder="Enter ingredients..."
                    errorMessage={inputError}
                />

                <Button
                    buttonType="primary"
                    text="Search"
                    handleClick={handleSearch}
                />
            </div>

            {notFoundError && <p className="search-ingredients__error">{notFoundError}</p>}

            <div className="search-ingredients__results">
                {recipes.length > 0 ? (
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id} className="search-ingredients__list">
                                <div className="search-ingredients__image">
                                    <img src={recipe.picture_link} alt="recipe title"/>
                                </div>
                                
                                <div className="search-ingredients__list-details">
                                    <Link to={`/recipe/${recipe.id}`} className="search-ingredients__link">
                                        <h3>{recipe.title}</h3>
                                    </Link>

                                    <p>Estimated Time: {recipe.estimated_time} minutes</p>

                                    
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                ) : null}

            </div>
        </div>
    )
};

export default SearchByIngredientsPage;