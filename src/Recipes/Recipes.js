import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Recipes.css';
import { useParams } from 'react-router';
import Button from '../Components/Button/Button';
import { Link } from 'react-router-dom';
import bg_img from '../images/Hero.png'

const Recipes = () => {
    const { id } = useParams();
    const [ recipes, setRecipes ] = useState([])
    console.log(id)
    const fetchData = async() =>{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setRecipes(data.meals[0])
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <>
            <div className="recipe-container">
            {/* MENU NAV */}
                <div className="recipes-nav-container">
                    <div className="menu-navbar-wrapper">
                        <div className="menu-nav-logo-wrapper">
                            <div className="menu-nav-logo">
                                <i className="fas fa-coffee"></i>
                            </div>
                        </div>
                        <div className="menu-navbar">
                            <ul className="menu-nav-icon-wrapper">
                                <li className="menu-nav-icon"><i className="fas fa-home"></i></li>
                                <li className="menu-nav-icon"><i className="fas fa-heart"></i></li>
                                <li className="menu-nav-icon"><i className="fas fa-bell"></i></li>
                                <li className="menu-nav-icon"><i className="fas fa-tag"></i></li>
                            </ul>
                        </div>
                        <div className="menu-back-icon-wrapper">
                            <Link to="/menu">
                                <div className="menu-back-icon"><i className="fas fa-angle-left"></i></div>
                            </Link>
                        </div>
                    </div>
                </div>
            {/* MOBILE TOP NAV */}
                <div className="mobile-top-nav-wrapper">
                    <ul className="mobile-top-nav">
                        <Link to="/menu">
                            <li className="mobile-top-nav-back"><i className="fas fa-angle-left"></i></li>
                        </Link>
                        <li className="mobile-top-nav-logo"><i className="fas fa-coffee"></i></li>
                    </ul>
                </div>
            {/* RECIPES IMAGES */}
                <div className="recipes-img-container">
                    <div className="recipes-wrapper">
                        <img className="recipes-img" src={recipes.strMealThumb}></img>
                    </div>
                    <div className="watch-tutorial-btn-wrapper">
                        <a href={recipes.strYoutube} target="_blank" rel="noopener noreferrer">
                            <Button size="big" style="primary">Watch Tutorial</Button>
                            </a>
                    </div>
                </div>
            {/* TITLES */}
                <div className="recipes-title-wrapper">
                    <div className="recipes-title">
                        {recipes.strMeal}
                    </div>
                </div>
            {/* RATING */}
                <div className="rating-wrapper">
                    <Button size="small" style="primary" margin="margin" mobile="mobile-small"><i className="fas fa-star"></i>5k+ Rating</Button>
                    <Button size="small" style="primary" margin="margin" mobile="mobile-small"><i className="fas fa-fire"></i>150kcal</Button>
                    <Button size="small" style="primary" margin="margin" mobile="mobile-small"><i className="fas fa-clock"></i>60 mins</Button>
                </div>
            {/* INSTRUCTIONS */}
                <div className="instructions-wrapper">
                    <div className="instructions">
                        {recipes.strInstructions}
                    </div>
                </div>
            {/* BACKGROUND IMAGES */}
                <div className="recipes-bg">
                    <img src={bg_img} className="recipes-bg-img"></img>
                </div>
            </div>
        </>
    )
}
export default Recipes;