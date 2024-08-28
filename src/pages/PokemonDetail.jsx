import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const [serchParams] = useSearchParams();
  const targetId = Number(serchParams.get("id"));
  const navigate = useNavigate();

  const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === targetId);
  return (
    <div>
      <img src={targetPokemon.img_url} />
      <h4>{targetPokemon.korean_name}</h4>
      <button onClick={() => navigate("/dex")}>뒤로가기</button>
    </div>
  );
};

export default PokemonDetail;
