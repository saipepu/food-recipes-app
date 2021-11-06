import React from 'react';
import './Card.css'

const Card = ({ id, title, img }) => {

    return(
        <>
        <div className="card-wrapper">
            <div className="img-wrapper"><img src={img} className="card-img"></img></div>
            <div className="food-title-wrapper">
                <div className="food-title">{title}</div>
            </div>
        </div>
        </>
    )
}
export default Card;