import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, onHandler, btn }) => {
  const navigate = useNavigate();
  return (
    <li key={pokemon.id}>
      <Link to={`/pokemon-detail?id=${pokemon.id}`}>
        <img src={pokemon.img_url} />
        <h4>{pokemon.korean_name}</h4>
        <p>{pokemon.id}</p>
        <p>{pokemon.description}</p>
      </Link>
      <button onClick={() => onHandler(pokemon)}>
        {btn ? "추가하기" : "삭제하기"}
      </button>
    </li>
  );
};

export default PokemonCard;
