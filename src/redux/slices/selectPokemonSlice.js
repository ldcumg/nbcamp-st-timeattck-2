import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectPokemonSlice = createSlice({
  name: "slectPokemon",
  initialState,
  reducers: {
    addPokemon: (state, actions) => {
      return [...state, actions.payload];
    },
    removePokemon: (state, actions) => {
      return state.filter((pokemon) => pokemon.id !== actions.payload.id);
    },
  },
});

export const { addPokemon, removePokemon } = selectPokemonSlice.actions;

export default selectPokemonSlice.reducer;
