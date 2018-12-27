import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import FlagCountry from './FlagCountry';
import ListOfRecipes from './ListOfRecipes';
import RecipePage from './RecipePage';
import Random from './Random';

// import Canada from './images/canada-country.png';
// import China from './images/china-country.png';
// import England from './images/england-country.png';
// import France from './images/france-country.png';
// import India from './images/india.png';
// import Japan from './images/japan.png';
// import Mexico from './images/Mexico.png';
// import Morocco from './images/morocco.png';
// import Spain from './images/spain.png';
// import Thailand from './images/thailand.png';
// import Vietnam from './images/vietnam.png';
// import UnitedStates from './images/UnitedStates.jpg';

import UnitedStates from './images/us.png';
import England from './images/en.png';
import Canada from './images/ca.png';
import China from './images/cn.png';
import France from './images/fr.png';
import India from './images/in.png';
import Italy from './images/it.png';
import Jamaica from './images/jm.png';
import Japan from './images/jp.png';
import Mexico from './images/mx.png';
import Morocco from './images/ma.png';
import Spain from './images/es.png';
import Thailand from './images/th.png';




class YumWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                {
                    country: 'Canada',
                    flag: Canada,
                    recipe: [],
                    nationality: 'Canadian'
                },
                {
                    country: 'China',
                    flag: China,
                    recipe: [],
                    nationality: 'Chinese'
                },
                {
                    country: 'UnitedKingdom',
                    flag: England,
                    recipe: [],
                    nationality: 'British'
                },
                {
                    country: 'France',
                    flag: France,
                    recipe: [],
                    nationality: 'French'
                },
                {
                    country: 'India',
                    flag: India,
                    recipe: [],
                    nationality: 'Indian'
                },
                {
                    country: 'Italy',
                    flag: Italy,
                    recipe: [],
                    nationality: 'Italian'
                },
                {
                    country: 'Jamaica',
                    flag: Jamaica,
                    recipe: [],
                    nationality: 'Jamaican'
                },
                {
                    country: 'Japan',
                    flag: Japan,
                    recipe: [],
                    nationality: 'Japanese'
                },
                {
                    country: 'Mexico',
                    flag: Mexico,
                    recipe: [],
                    nationality: 'Mexican'
                },
                {
                    country: 'Morocco',
                    flag: Morocco,
                    recipe: [],
                    nationality: 'Moroccan'
                },
                {
                    country: 'Spain',
                    flag: Spain,
                    recipe: [],
                    nationality: 'Spanish'
                },
                {
                    country: 'Thailand',
                    flag: Thailand,
                    recipe: [],
                    nationality: 'Thai'
                },
                // {
                //     country: 'Vietnam',
                //     flag: Vietnam,
                //     recipe: [],
                //     nationality: 'Vietnamese'
                // },
                {
                    country: 'UnitedStates',
                    flag: UnitedStates,
                    recipe: [],
                    nationality: 'American'
                }
            ]
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact render={(props) => {
                        return (
                            <div>
                            <FlagCountry
                                countryFlags={this.state.countries}
                                {...props}
                                />
                            </div>)
                    }} />
                    <Route path="/:country" exact render={(props) => {
                        return (
                            <ListOfRecipes
                                nationality={this.state.countries}
                                {...props}
                            />)
                    }} />
                    <Route path="/:country/:dish/:id" exact render={(props) => {
                        return (
                            <RecipePage
                                recipes={this.state.recipe}
                                {...props}
                            />)
                    }} />
                    <Route path="/random/dish" exact render={(props) => {
                        return (
                            <Random
                                recipes={this.state.recipe}
                                nationality={this.state.countries}
                                {...props}    
                            />)
                    }} /> 
                </div>
            </Router>
        );
    }
}

export default YumWorld;