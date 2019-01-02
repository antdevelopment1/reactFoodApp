# yumWorld React App

## What Is This Project About
This website is a food app that uses React and API calls, to render meal instructions to the user based on the selected country and meal.

## Technologies used
* HTML
* CSS / Flexbox
* Vanilla JavaScript
* React
* React Router
* NPM

## Site Walkthrough
<p>Here the user can select what recipe's they would like to retieve by clicking on a specified country flag image.</p>
<p align='center'>
    <img src='readme/images/landingflag2.png'></img>
</p>
<br>

<p>Once the user picks a country they will be navigated to a page with a list of meals from that country. </p>
<p align='center'>
    <img src='readme/images/italianmeals.png'></img>
</p>
<p align='center'>
    <img src='readme/images/britishmeals.png'></img>
</p>
<br>
<p align='center'>
    <img src='readme/images/jamacian.png'></img>
</p>

<p>After user selects a recipe they will be navigated to a page with a list of ingrediants and meal prep instructions.</p>
<p align='center'>
    <img src='readme/images/chickenalfedo.png'></img>
</p>
<br>
<p align='center'>
    <img src='readme/images/kungpow.png'></img>
</p>
<br>
<p align='center'>
    <img src='readme/images/buttertarts.png'></img>
</p>

## Code Walkthrough / Featues


### Landing Page, Recipe Page, and Ingredients Page Features
<p>The landing page is a view of country flags for user to click.</p>
<br>
<br>

<p>The images have a scale and box shadow transition on hover</p>

```
.flagImages {
    min-height: 150px;
    min-width: 200px;
    max-height: 150px;
    max-width: 200px;
    box-shadow: 3px 3px 7px black;
    transition: box-shadow .2s ease-in-out .1s, color .2s ease-in-out .1s, transform .2s ease-in-out .1s;
    margin-bottom: 8px;
    outline: 1px solid red;
}

.flagImages:hover {
    transform: scale(1);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .7)
}
```

<p>When the image is clicked we pass an object as props down to our flag country component</p>

```
<Route path="/:country" exact render={(props) => {
    return (
        <ListOfRecipes
            nationality={this.state.countries}
            {...props}
        />)
}} />
```

```
const FlagCountry = (props) => {
    const arrayOfList = props.countryFlags
    const theListOfCountry = arrayOfList.map((country, index) => {
        const theCountry = country.country;
        const theFlag = country.flag;
        const theNationality = country.nationality;
        const theKey = index;

        return (
            <Link to={`/${theNationality}`} key={theKey} >
                <div className="images">
                    <figure>
                        <img className="flagImages" alt={theCountry} src={theFlag}/>
                        <figcaption>
                            {theCountry}
                        </figcaption>
                    </figure>
                </div>
            </Link>
        )
    });
```


<p>Once the user picks a meal they are then routed to the single meal with ingrediants and meal prep instructions</p>

```
 <Route path="/:country/:dish/:id" exact render={(props) => {
    return (
        <RecipePage
            recipes={this.state.recipe}
            {...props}
        />)
}} />

```

```
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
```

### API Features
<p>We do a fectch request and convert our response to JSON and drill into our object to set out state to a property on our retrieved object.</p>

<p></p>

```
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
```

### Counters / Randomized Feature
<p>This feature uses second API call and lets you select a random dish where you can vote up or down based on your liking.</p>

```
 <Route path="/random/dish" exact render={(props) => {
    return (
        <Random
            recipes={this.state.recipe}
            nationality={this.state.countries}
            {...props}    
        />)
}} /> 
```

<p>Functions to handle increase and decrease in count</p>

```
 constructor(props) {
    super(props);
    this.state = {
        id: "",
        recipeImage: "",
        recipeTitle: "",
        likes: parseInt((Math.random() * (100)).toFixed(0)),
        unlikes: parseInt((Math.random() * (100)).toFixed(0)),
        ingredients: [],
        measurements: [],
        instructions: "",
        sourceURL: ""
}
```

```
_handleLike = () => {
    this.setState({
        likes: (this.state.likes + 1)
    })
};

_handleUnlike = () => {
    this.setState({
        unlikes: (this.state.unlikes - 1)
    })
};
```

### Built By:
#### April Copes, Steven Taesung Kim, Clare Barton, and Lauren Wilkerson
