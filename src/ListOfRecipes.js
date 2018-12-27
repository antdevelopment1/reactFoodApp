import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListOfRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        const countryName = this.props.match.params.country;
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
            .then(r => r.json())
            .then(recipe => {
                this.setState({
                    recipes: recipe.meals
            });
        })
    }

    render() {
        const countryName = this.props.match.params.country;
        const listOfRecipes = this.state.recipes.map((recipe, index) => {
            const id = recipe.idMeal;
          
            return( 
                    <Link key={index} to = {`/${countryName}/${recipe.strMeal}/${id}`}>
                    <div className="images">
                        <figure>
                            <img className="food-images" src={recipe.strMealThumb} alt={recipe.strMealThumb}/>
                                <figcaption>
                                    {recipe.strMeal} 
                                </figcaption>
                        </figure>
                        </div>
                    </Link>
    
            )
        })
        
        return (
            <div className="recipeImages">
                <div className="back-btn-container">
                    <Link className="back-btn" to = {`/`}>Back To Countries</Link>
                </div>
                <div className="recipe-title-container">
                <h1>{this.props.match.params.country} food, great choice!</h1>
                <h2>Select one of these mouthwatering dishes!</h2>
                </div>
                <div className="recipe-image-container">
                    {listOfRecipes}
                </div>
            </div>
        )
    }
}

export default ListOfRecipes;
