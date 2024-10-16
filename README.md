# Project Title

Reversipe

## Overview

Reversipe is a mobile app designed for users who want to create meals based on the ingredients they have at home. It is also perfect for users who wish to be more creative in the kitchen and experiment with recipes without needing additional resources.

### Problem Space

People typically find it difficult to figure out what they can make with limited ingredients, this leads to food waste or spending more money on groceries. Reversipe addresses this problem by allowing users to maximize the ingredients they already have at home, reducing food waste and allowing for more creative meals prepared.

### User Profile

-   Anyone who enjoys cooking, or looking for quick meal ideas based on the available ingredients they have.

-   People that want to reduce food waste by using the ingredients they have before they expire.

-   Users will interact with the app by inputting their available ingredients into the app and receive recipe suggestions. They will have the option to search for meals based on country or region.

### Features

-   Recipe Search Based on Ingredients: Input available ingredients and get a list of recipes to match those ingredients

-   Ingredient List: List of all ingredients needed to prepare meal

-   Step-by-Step Instructions: Clear instructions on how to prepare each meal

-   Preparation Time Estimate: An estimation time for cooking will be displayed to the user

-   Cusine Search: Search for meals from a particular country or region

## Implementation

### Tech Stack

Frontend:

-   React
-   JavaScript
-   SASS

Backend:

-   Node.js
-   Express

-   Axios

### APIs

-   Will be using data from https://eightportions.com/datasets/Recipes/ to retrieve the recipe information, ingredients and instructions.

### Sitemap

-   Home Page

    -   This shows a search bar for inputting ingredients
    -   A filter for selecting recipes based on country or cusine

-   Recipe Results Page

    -   This displays recipe cards based on the user's input ingredients
    -   Each card will show the recipe name, the number of ingredients the user has, and the total number required

-   Recipe Details Page

    -   This shows detailed recipe instructions, ingredients, how many ingredients the user has for the meal, and how many are missing

-   Cuisine Search Page
    -   Allow users to search for recipe's based on country or regional cusine

### Mockups

### Data

-   Recipe Data:
    -   Recipe title
    -   Ingredients
    -   Instructions
    -   Image
    -   Country
    -   Total ingredients required
    -   Ingredients the user has
    -   Missing ingredients

### Endpoints

1. GET/recipes/ingredients/country: This retrives recipes based on ingredients and country selected.

-   Parameters: Ingredients, country

-   Response:

            [
                {
                    "recipeId": "abc123",
                    "title": "Italian Chicken Stew",
                    "country": "Italy",
                    "image": "image_url",
                    "preparationTime": "45 mins",
                    "ingredientsRequired": 5,
                    "ingredientsUserHas": 4,
                    "missingIngredients": ["oregano"],
                }
            ]

2. GET/recipes/ingredients: Retrieves recipes based solely on ingredients provided by the user.

-   Parameters: Ingredients

-   Response:

            [
                {
                "recipeId": "ghi789",
                "title": "Chicken Alfredo",
                "country": "United States",
                "image": "image_url",
                "preparationTime": "30 mins",
                "ingredientsRequired": 5,
                "ingredientsUserHas": 4,
                "missingIngredients": ["parmesan"]
                }
            ]

3. GET/recipes/search : Retrieves recipes based on a general search term e.g Pasta (This is for users who want to search for recipes by name without providing a specific ingredient).

-   Parameters: Query

-   Response:

            [
                {
                "recipeId": "mno345",
                "title": "Spaghetti Carbonara",
                "country": "Italy",
                "image": "image_url",
                "preparationTime": "25 mins",
                "ingredientsRequired": 6
                }
            ]

4.  3. GET/cusine/country : Retrieves recipes based on the specified country or region.

-   Parameters: Country

-   Response:

            [
                {
                "recipeId": "stu901",
                "title": "Margherita Pizza",
                "country": "Italy",
                "image": "image_url",
                "preparationTime": "15 mins",
                "ingredientsRequired": 4
                }
            ]

## Roadmap

-   Frontend and Backend Setup

    -   Set up project repos and environments.
    -   Manually update dataset to include "country" field for each recipe.
    -   Build basic UI framework.

-   Search Functionality

    -   Implement GET endpoints: To allow users to input ingredients and retrieve matching recipes
    -   Display recipe result on the frontend.

-   Recipe Details Page

    -   Create Recipe Details Page: This will show ingredients, instructions and missing ingredient information.

-   Filter based on Country and Cuisine Search

    -   Add a country filter: To allow users search for recipes by country or region.
    -   Implement GET endpoint.

-   Testing

    -   Test all core funtionalities.

-   UI Refinement

    -   Refine the UI and make sure it's user friendly.

-   Final Testing and Bug Fixes

    -   Perform final testing and fix any issues.

---

## Future Implementations

-   Dietary Preferences: Allow users filter recipes based on dierary restrictions such as vegan, vegetarian, and gluten-free options.

-   Responsiveness: Ensure the app is responsive across various breakpoints.

-   Favorites: Add an option for users to save their favorite recipes.

-   User authentication: Implement a login system in order for users to access their saved recipes and bulk ingredients from any device.

-   Shopping list generator: Create a shopping list for missing ingredients from a recipe.
