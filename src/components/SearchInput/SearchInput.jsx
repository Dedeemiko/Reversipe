import React from "react";
import "./SearchInput.scss"


function SearchInput({ value, onChange, placeholder, errorMessage }) { 
    
    return (
        <div className="search-input__container">
            <input
                type="text"
                className={`search-input ${errorMessage ? "search-input--error" : ""}`}
                value={value}
                onChange={(event) => {
                    onChange(event.target.value);
                }}
                placeholder={placeholder}
            />
            {errorMessage && <p className="search-input__error">{errorMessage}</p>}
        </div>
    );
}

export default SearchInput;