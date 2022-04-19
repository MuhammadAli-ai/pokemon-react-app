# Pokemon React App

This is a simple application that uses the following Pokemon API: "https://pokeapi.co/api/v2/pokemon/"

I included the additional query of limiting a 1000 Pokemon to the initial search "?limit=1000".

## My Customisations

Users will see a Loading Screen while the data is fetched from the Pokemon API.
![Loading Screen](./src/img/LoadingScreen.png)

Initially it will show the full list of Pokemon available then users can view limited to the first 1000 Pokemon available in individual cards.

Users are able to see key information about the Pokemon including:

- Pokemon Name
- Weight, Height Base HP
- Pokemon Type
- Base Stats with bar graph visual of attack stat, defene, speed and special attack stat.
- List of 2 abilities.

![Pokemon Cards](./src/img/pokemonCards.png)

Users can then search through the different Pokemon present via the search bar as shown below.

![Search Bar to find Pokemon](./src/img/searchBarPokemon.png)

Then the options of Pokemon shown will be limited that have in their name the order of letters typed into the Search Bar as shown below.

![Searched Pokemon](./src/img/PokemonSearched.png)

The website is dynamic and responsive to screen size.

Small Screen Size
![Small Screen Size](./src/img/ScreenSizeSmall.png)

Medium Screen Size
![Medium Screen Size](./src/img/ScreenSizeMedium.png)

Large Screen Size
![Large Screen Size](./src/img/ScreenSizeLarge.png)

## Future changes

Incorporate React Styled Components and include some animation as the website is fairly static.

Make the Heading more aesthetic and a background with more color.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
