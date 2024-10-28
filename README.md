# Project Title

Reversipe

## Overview

Reversipe is a mobile app designed for users who want to create meals based on the ingredients they have at home. It is also perfect for users who wish to be more creative in the kitchen and experiment with recipes without needing additional resources.

### Problem Space

People typically find it difficult to figure out what they can make with limited ingredients, this leads to food waste or spending more money on groceries. Reversipe addresses this problem by allowing users to maximize the ingredients they already have at home, reducing food waste and allowing for more creative meals prepared.

### User Profile

-   Anyone who enjoys cooking, or looking for quick meal ideas based on the available ingredients they have.

-   People that want to reduce food waste by using the ingredients they have before they expire.

-   Users will interact with the app by inputting their available ingredients into the app and receive recipe suggestions. 

### Features

-   Recipe Search Based on Ingredients: Input available ingredients and get a list of recipes to match those ingredients

-   Ingredient List: List of all ingredients needed to prepare meal

-   Step-by-Step Instructions: Clear instructions on how to prepare each meal

-   Preparation Time Estimate: An estimation time for cooking will be displayed to the user


## Implementation

### Tech Stack

Frontend:

-   React
-   JavaScript
-   SASS

Backend:

-   Node.js
-   Express
-   MySQL

-   Axios

### APIs

-   Will be using data from https://eightportions.com/datasets/Recipes/ to retrieve the recipe information, ingredients and instructions.
-   Used data from eightportions api to create a limited database, will be expanding it in the future.

### Sitemap

-   Home Page

    -   This is the welcome page
    -   It shows 2 options for the user, Search by Ingredients and Search by Recipe.

-   Search by Ingredients Page

    -   This displays recipe cards based on the user's input ingredients.
    -   This shows a search bar for inputting ingredients.
    -   Each card will show the recipe name and estimated time to prepare the meal.
 
-   Search by Recipe Page

    -   This displays recipe cards based on the user's input recipe.
    -   This shows a search bar for inputting recipes.
    -   Each card will show the recipe name and estimated time to prepare the meal.

-   Recipe Details Page

    -   This shows detailed recipe instructions, ingredients, estimated time to prepare andplace of origin of meal.


### Mockups

https://www.figma.com/design/pEWHkdx0XqNVePQVPmHToa/Reversipe?node-id=0-1&t=rpCrrWYNbdkLQ3x1-1
https://www.figma.com/design/pEWHkdx0XqNVePQVPmHToa/Reversipe?node-id=1-20&t=rpCrrWYNbdkLQ3x1-1

### Data

-   Recipe Data:
    -   Recipe title
    -   Ingredients
    -   Instructions
    -   Image
    

### Endpoints

1. GET/api/recipes/ingredients-search: Retrieves recipes based solely on ingredients provided by the user.

-   Parameters: Ingredients

-   Response:

            [
                {
                "recipeId": "ghi789",
                "title": "Chicken Alfredo",
                "country": "United States",
                "image": "image_url",
                "preparationTime": "30 mins",
                }
            ]

3. GET/api/recipes/search : Retrieves recipes based on a general search term e.g Pasta (This is for users who want to search for recipes by name without providing a specific ingredient).

-   Parameters: Query

-   Response:

            [
                {
                "recipeId": "mno345",
                "title": "Spaghetti Carbonara",
                "country": "Italy",
                "image": "image_url",
                "preparationTime": "25 mins",
                }
            ]


## Roadmap

-   Frontend and Backend Setup

    -   Set up project repos and environments.
    -   Manually update dataset to include "country" field for each recipe.
    -   Build basic UI framework.
    -   Create Logo.

-   Search Functionality

    -   Implement GET endpoints: To allow users to input ingredients and retrieve matching recipes
    -   Display recipe result on the frontend.

-   Recipe Details Page

    -   Create Recipe Details Page: This will show ingredients, instructions and missing ingredient information.

-   Testing

    -   Test all core funtionalities.

-   UI Refinement

    -   Refine the UI and make sure it's user friendly.

-   Final Testing and Bug Fixes

    -   Perform final testing and fix any issues.

---

## Future Implementations

-   Dietary Preferences: Allow users filter recipes based on dierary restrictions such as vegan, vegetarian, and gluten-free options.

-   Cusine Search: Search for meals from a particular country or region. Add filter for selecting recipes based on country or cusine.

-   Show the user Total ingredients required, ingredients the user has and missing ingredients on the recipe detail page.

-   Responsiveness: Ensure the app is responsive across various breakpoints.

-   Favorites: Add an option for users to save their favorite recipes.

-   User authentication: Implement a login system in order for users to access their saved recipes and bulk ingredients from any device.

-   Shopping list generator: Create a shopping list for missing ingredients from a recipe.

-   A food board (like pinterest but for food!). Users would be able to post their recipes with photos and other users can save and like posts.
