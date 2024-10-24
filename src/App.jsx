import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SearchByIngredientsPage from "./pages/SearchByIngredientsPage/SearchByIngredientsPage";
import SearchByRecipePage from "./pages/SearchByRecipePage/SearchByRecipePage";


function App() {
  

  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/search-by-ingredients" element={<SearchByIngredientsPage />} />
                  <Route path="/search-by-recipe" element={<SearchByRecipePage />} />
                </Routes>
            </main>
          
            <Footer />
        </div>
      
    </BrowserRouter>
  )
}

export default App;
