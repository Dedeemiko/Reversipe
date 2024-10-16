# Project Title

## Overview

What is your app? Give a brief description in a couple of sentences.

It is a reverse food receipe app called ReverseCipe. ReverCipe is a mobile app designed for users who want to create a meal based on the ingredients they have at home.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

People typically find it difficult to figure out what they can make with limited ingredients, this leads to food waste or more money spent buying more groceries. ReverCipe addresses this problem by allowing users to maximize the ingredients they already have

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

-   Anyone

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

-   As a user, I want to create a meal using the ingredients I have at home
-   As a user, I want to know if I have esufficient ingredients for the meal I plan to prepare
-   As a user, I want to see the estimated time required to prepare the meal
-   As a user, I want clear instructions on how to prepare the meal
-   As a user, I want to search for meals from specific Countries

-   As a user, I want to be able to see all the meals I have saved

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

-   React
-   JavaScript
-   SASS
-   Axios

### APIs

List any external sources of data that will be used in your app.

-   Will be using data from https://eightportions.com/datasets/Recipes/ to retrieve the recipe information. I would dataset

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

-   Home Page

    -   This shows a search bar for inputting ingredients
    -   A filter for selecting recipes based on country or cusine

-   Recipe Results Page
    -   This displays recipe cards based on the user's input ingredients
    -   Each card will show the recipe name and the number of ingredients the user has and the total number required
-   Recipe Details Page
    -   This shows detailed recipe instructions, ingredients, how many ingredients the user has for the meal and how many are missing
-   Cuisine Search Page
    -   Allow users to search for recipe's based on country or regional cusine

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

1. GET/recipe/{id}: This retrives the details of a specific recipe

-   Parameters: Recipe ID
-   Response: JSON object which contains ingredient list, instructions, and time estimate

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

-   Frontend and Backend Setup

    -   Set up project repos and environments
    -   Manually update dataset to include country field for each recipe
    -   Build basic UI framework

-   Search Functionality

    -   Implement GET endpoints: To allow users to input ingredients and retrieve matching recipes
    -   Display recipe result on the frontend

-   Recipe Details Page

    -   Create Recipe Details Page: This will show ingredients, instructions and missing ingredient information

-   Filter based on Country and Cuisine Search

    -   Add a country filter: To allow users search for recipes by country or region
    -   Implement GET endpoint

-   Testing

    -   Test all core funtionalities

-   UI Refinement

    -   Refine the UI

-   Final Testing and Bug Fixes

---

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

-   Dietary Preferences: Allow users filter recipes based on dierary restrictions such as vegan, vegetarian, and gluten-free options.
-   Responsiveness: The app should be responsive across various breakpoints.
-   User authentication: Implement a login system in order for users to access their saved recipes and bulk ingredients from any device.
-   Add an option for users to save their favorite recipes
-   Shopping list generator: Create a shopping list for missing ingredients from a recipe.
