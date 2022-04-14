import React, { useState, useEffect } from "react";

import { getAllPokemon, getPokemon } from "./components/services/pokemon";

import CardList from "./components/ui/card/CardList";
import Header from "./components/ui/header/Header";
import Search from "./components/ui/Search/Search";

import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState("true");
  const generalURL = "https://pokeapi.co/api/v2/pokemon/?limit=1000";
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);
  const [searchField, setSearchField] = useState("");

  // useEffect to fetch list of pokemon and urls
  // then await fetch call and data and place it in async await
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(generalURL);
      console.log(response);
      await loadingPokemon(response.results);
      setIsLoading(false);
      console.log(response.results);
    }
    fetchData();
  }, []);

  // console.log("render APP");

  /**
   * * above returns array full of entries for below
  0:
    name: "bulbasaur"
    url: "https://pokeapi.co/api/v2/pokemon/1/"

  * * Need to now iterate through the urls in this array 
  * * and call fetch on etch of these urls to get key info for each pokemon

  0:
    abilities: (2) [{…}, {…}]
    base_experience: 64
    forms: [{…}]
    height: 7
    held_items: []
    id: 1
    name: "bulbasaur"
   */

  // func that awaits array of Promises All on an array of objs for each pokemon made by  mapping initial fetch urls and running getPokemon func on them each
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    // array of obj returned from above is stored in state
    setPokemonData(_pokemonData);
  };

  function onSearchChange(event) {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    const newFilteredPokemon = pokemonData.filter((pika) => {
      return pika.name.includes(searchField);
    });
    setFilteredPokemon(newFilteredPokemon);
  }, [pokemonData, searchField]);

  console.log(pokemonData);

  return (
    <div className="App">
      <Header />
      <Search
        onChangeHandler={onSearchChange}
        placeholder="Search Your Favourite Pokemon!"
        className="Search__box"
      />
      <div className="Cred__wrapper">
        <p className="Cred">
          Created using the <strong>https://pokeapi.co/</strong> API
        </p>
      </div>

      <CardList isLoading={isLoading} pocketMonsters={filteredPokemon} />
    </div>
  );
}

export default App;
