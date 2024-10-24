import React, { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";


function SearchByRecipePage() {
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = (newSearchItem) => {
        setSearchItem(newSearchItem);
        
    };

    return (
        <div className="Search-ingredients">
            <h2>Search by Recipe</h2>

            <SearchInput
                value={searchItem}
                onChange={handleSearch}
                placeholder="Search Recipe..."
            />
        </div>
    )
};

export default SearchByRecipePage;