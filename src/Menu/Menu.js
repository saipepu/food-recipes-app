import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import './Menu.css';
import Card from '../Components/Card/Card';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [result , setResult] = useState([])
    const [ choose, setChoose ] = useState("Chinese");

    console.log(choose);
    const fetchData = async (choose) => {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${choose}`)
        console.log(data);
        if( data.meals !== null){
            setResult(data.meals);
            console.log("set")
        }
        else
        {
            console.log("no set")
            setResult(result);
        }
        console.log(data.meals)
    }

    useEffect(() => {
            fetchData(choose);
    },[choose])

    const handleClick = (region) => {
        setChoose(region)
    }


    return(
        <>
        <div className="menu-container">
            {/* MENU NAV */}
            <div className="menu-nav-container">
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
                        <Link to="/">
                            <div className="menu-back-icon"><i className="fas fa-angle-left"></i></div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* MOBILE TOP NAV */}
            <div className="mobile-top-nav-wrapper">
                <ul className="mobile-top-nav">
                    <Link to="/">
                        <li className="mobile-top-nav-back"><i className="fas fa-angle-left"></i></li>
                    </Link>
                    <li className="mobile-top-nav-logo"><i className="fas fa-coffee"></i></li>
                </ul>
            </div>
            {/* BANNER */}
            <div className="banner-wrapper">
                <div className="banner">
                    <div className="banner-title">
                        Best Recipes You Will Ever Need
                    </div>
                </div>
            </div>
            {/* CATEGORIES */}
            <div className="category-wrapper">
                <div className="category-title">Category</div>
                <ul className="categories">
                    <li className="category-items" onClick={() => handleClick("Chinese")}>Chinese</li>
                    <li className="category-items" onClick={() => handleClick("Indian")}>Indian</li>
                    <li className="category-items" onClick={() => handleClick("Japanese")}>Japanese</li>
                    <li className="category-items" onClick={() => handleClick("Mexican")}>Mexican</li>
                    <li className="category-items" onClick={() => handleClick("Italian")}>Italian</li>
                    <li className="category-items" onClick={() => handleClick("British")}>British</li>
                    <li className="category-items" onClick={() => handleClick("Thai")}>Thai</li>
                    <li className="category-items" onClick={() => handleClick("French")}>French</li>
                    <li className="category-items" onClick={() => handleClick("Canadian")}>Canadian</li>
                </ul>
            </div>
            {/* POPULAR */}
            <div className="recipes-card-wrapper">
                <div className="popular">Popular</div>
                <div className="cards">
                    {result.map(data => (
                        <Link key={data.idMeal} to={`/recipes/${data.idMeal}`}>
                            <Card key={data.idMeal} title={data.strMeal} id={data.idMeal} img={data.strMealThumb}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default Menu;