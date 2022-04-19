import React, { useState, useEffect } from "react";

import { getAllPokemon, getPokemon } from "./components/services/pokemon";

import CardList from "./components/ui/card/CardList";
import Header from "./components/ui/header/Header";
import Search from "./components/ui/Search/Search";

import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState("true");

  const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);
  const [searchField, setSearchField] = useState("");

  // inital URL limit pokemon to 1000
  const generalURL = "https://pokeapi.co/api/v2/pokemon/?limit=1000";

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

  // onChange Event func to set
  function onSearchChange(event) {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  // useEffect Hook with func to filter PokemonData by searchField
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
        {/* <p ClassName="Cred">
          Developed by{" "}
          <a href="https://github.com/MuhammadAli-ai">Muhammad Khaife Ali</a>
        </p> */}
        <p className="Cred__Github">
          Developed by{" "}
          <a href="https://github.com/MuhammadAli-ai">Muhammad Khaife Ali</a>
        </p>
      </div>

      <CardList isLoading={isLoading} pocketMonsters={filteredPokemon} />
    </div>
  );
}

export default App;
