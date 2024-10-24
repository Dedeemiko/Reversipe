import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";


function SearchByIngredientsPage() {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (newSearchItem) => {
        setSearchItem(newSearchItem);
        
    };

    return (
        <div className="Search-ingredients">
            <h2>Search by Ingredients</h2>

            <SearchInput
                value={searchItem}
                onChange={handleSearch}
                placeholder="Enter ingredients..."
            />
        </div>
    )
};

export default SearchByIngredientsPage;