import React from "react";
import "./SearchInput.scss"

function SearchInput({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            className="search-input"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
        />
    );
}

export default SearchInput;