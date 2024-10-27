import { useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import "./RecipeDetailPage.scss";
import { useEffect } from "react";
import { baseUrl } from "../../utils/api";



function RecipeDetailPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}api/recipes/recipes/${id}`);
                setRecipe(response.data);
            } catch (err) {
                console.error("Error fetching recipe details:", err);
                setError("Error fetching recipe details");
            } finally {
                setLoading(false);
            }
        }

        fetchRecipeDetails();
    },[id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="recipe-detail">
           
            <img src={recipe.picture_link} alt={recipe.title} className="recipe-detail__img" />
            <h2>{recipe.title}</h2>

            <p><span className="label">Place of Origin:</span> {recipe.place_of_origin}</p>

            <p><span className="label">Estimated Time:</span> {recipe.estimated_time} minutes</p>

            <p><span className="label">Ingredients:</span> {recipe.ingredients}</p>
            
            <p><span className="label">Instructions:</span></p>
            <p>{recipe.instructions}</p> 
        </div>

    );
}


export default RecipeDetailPage;