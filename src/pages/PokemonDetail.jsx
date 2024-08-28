import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const [serchParams] = useSearchParams();
  const targetId = Number(serchParams.get("id"));

  const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === targetId);
  return <div>{targetPokemon.korean_name}</div>;
};

export default PokemonDetail;
