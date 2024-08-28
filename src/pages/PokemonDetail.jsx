import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const [serchParams] = useSearchParams();
  const targetId = Number(serchParams.get("id"));
  const navigate = useNavigate();

  const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === targetId);
  return (
    <article>
     <img src={targetPokemon.img_url} />
      <h4>{targetPokemon.korean_name}</h4>
      <p>no. {targetPokemon.id}</p>
      <p>{targetPokemon.types.join(", ")}</p>
      <p>{targetPokemon.description}</p>
      <button onClick={() => navigate("/dex")}>뒤로가기</button>
    </article>
  );
};

export default PokemonDetail;
