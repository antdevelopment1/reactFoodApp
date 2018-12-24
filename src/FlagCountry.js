import React from 'react';
import { Link } from 'react-router-dom';
import index from './stylesheet/index.css';


const FlagCountry = (props) => {
    const arrayOfList = props.countryFlags
    const theListOfCountry = arrayOfList.map((country) => {
        const theCountry = country.country;
        const theFlag = country.flag;
        const theNationality = country.nationality;

        return (
            <Link to={`/${theNationality}`}>
                <div className="images">
                    <figure>
                        <img className="flagImages" alt={theCountry} src={theFlag} />
                        <figcaption>
                            {theCountry}
                        </figcaption>
                    </figure>
                </div>
            </Link>
        )
    });

    return (
        <div className="countryImages">
            <div className="country-title-container">
                <h1>Welcome to Dishbook!</h1>
                <h2 className="where-to-eat">Where would you like to eat?</h2>
                <Link className="website-link" to={`/random/dish`}>Get a Random Dish</Link>
            </div>
            <div className="country-image-container">
                {theListOfCountry}
            </div>
        </div>
    );
}

export default FlagCountry;