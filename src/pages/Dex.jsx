import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { createContext } from "react";

export const PokemonContext = createContext();
const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList pokemonlist={MOCK_DATA} />
    </>
  );
};

export default Dex;
