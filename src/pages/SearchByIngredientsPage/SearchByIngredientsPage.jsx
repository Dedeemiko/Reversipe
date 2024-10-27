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

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${baseUrl}api/recipes/ingredients-search`, { params: { ingredients: ingredients },
            });
            setRecipes(response.data);
        } catch (error) {
            console.error("Error searching for recipes", error);
        }
    };

    return (
        <div className="search-ingredients">
            <h2>Search by Ingredients</h2>

            <div className="search-ingredients__options">
                <SearchInput
                    value={ingredients}
                    onChange={setIngredients}
                    placeholder="Enter ingredients..."
                />

                <Button
                    buttonType="primary"
                    text="Search"
                    handleClick={handleSearch}
                />
            </div>

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
                                    
                                    <p>Ingredients Needed: {recipe.matchRate}</p>
                                    
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                ) : (
                    <p>No recipes found</p>
                )}

            </div>
        </div>
    )
};

export default SearchByIngredientsPage;