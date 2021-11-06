import React from 'react';
import './Button.css';

const Button = ({ children, size, style, margin, mobile}) => {

    return(
        <>
        <button className={`btn ${size} ${style} ${margin} ${mobile}`}>
            {children}
        </button>
        </>
    )
}
export default Button;