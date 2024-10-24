import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import Button from "../../components/Button/Button";
import "./SearchByRecipePage.scss";


function SearchByRecipePage() {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (newSearchItem) => {
        setSearchItem(newSearchItem);
        
    };

    return (
        <div className="search-recipe">
            <h2>Search by Recipe</h2>

            <div className="search-recipe__options">
                <SearchInput
                    value={searchItem}
                    onChange={handleSearch}
                    placeholder="Search Recipe..."
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

export default SearchByRecipePage;