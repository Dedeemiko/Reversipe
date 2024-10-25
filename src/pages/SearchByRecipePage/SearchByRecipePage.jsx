import React, { useState } from "react";
import axios from "axios";
import SearchInput from "../../components/SearchInput/SearchInput";
import Button from "../../components/Button/Button";
import { baseUrl } from "../../utils/api";
import "./SearchByRecipePage.scss";


function SearchByRecipePage() {
    const [searchItem, setSearchItem] = useState("");
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
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
                    onChange={setSearchItem}
                    placeholder="Search Recipe..."
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
                            <li key={recipe.id}>
                                <img src={recipe.picture_link} alt={recipe.title} />
                                <h3>{recipe.title}</h3>
                                <p>Estimated Time: {recipe.estimated_time} minutes</p>
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

export default SearchByRecipePage;