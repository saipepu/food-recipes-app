import React, { useState } from 'react';
import './Home.css';
import Button from '../Components/Button/Button';
import bg_img from '../images/Hero.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const [click , setClick ] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return(
        <>
        <div className="home-container">
            {/* HOME NAV */}
            <div className="home-nav">
                <div className="nav-logo-wrapper">
                    <div className="logo-img"><i className="fas fa-coffee"></i></div>
                    <div className="logo-title">Puff</div>
                </div>
                <div className={click ? "nav-active hamburger-navbar": "nav-active crossing-navbar"} onClick={handleClick}>
                            menu
                </div>
                    <div className="navbar-wrapper">
                        <ul className="navbar">
                            <li className="nav-links"><a className="nav-items">Home</a></li>
                            <li className="nav-links"><a className="nav-items">About Us</a></li>
                            <li className="nav-links"><a className="nav-items">Recipes</a></li>
                        </ul>
                        <div className="navbar-btn">
                        <Button size="small" style="primary">Contact Us</Button>
                    </div>
                </div>
            </div>
            {/* HOME BODY */}
            <div className="home-body">
                <div className="big-title">100+ recipes of the most<br/>delicious food for your appetite</div>
                <div className="home-body-btn-wrapper">
                    <Link to="/menu">
                        <Button size="big" style="primary" margin="margin" >Menu</Button>
                    </Link>

                    <Button size="big" style="secondary">About Us</Button>
                </div>
            </div>
            <div className="hero-bg">
                <img src={bg_img} className="hero-bg-img"></img>
            </div>
        </div>
        </>
    )
}
export default Home;