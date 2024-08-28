import { configureStore } from "@reduxjs/toolkit";
import selectPokemonSlice from "../slices/selectPokemonSlice";

const store = configureStore({ reducer: { slectPokemon: selectPokemonSlice } });

export default store;
