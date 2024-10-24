import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Button from "../../components/Button/Button";
import "./SearchByIngredientsPage.scss";


function SearchByIngredientsPage() {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (newSearchItem) => {
        setSearchItem(newSearchItem);
        
    };

    return (
        <div className="search-ingredients">
            <h2>Search by Ingredients</h2>

            <div className="search-ingredients__options">
                <SearchInput
                    value={searchItem}
                    onChange={handleSearch}
                    placeholder="Enter ingredients..."
                />

                <Button
                    buttonType="primary"
                    text="Search"
                    handleClick={handleSearch}
                />
            </div>
        </div>
    )
};

export default SearchByIngredientsPage;