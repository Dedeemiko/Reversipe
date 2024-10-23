import React from "react";
import "./Card.scss";


function Card({ title, imageSrc, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={imageSrc} alt={title} className="card__img" />

            <div className="card__title">{title}</div>

        </div>
    );
}

export default Card;