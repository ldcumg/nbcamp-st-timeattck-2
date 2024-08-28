import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);
  return (
    <>
      <Dashboard myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
      <PokemonList setMyPokemons={setMyPokemons} pokemonlist={MOCK_DATA} />
    </>
  );
};

export default Dex;
