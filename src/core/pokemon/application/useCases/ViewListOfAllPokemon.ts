import { PokemonGetter } from "../../domain/services/PokemonGetter";
import { InMemoryRepository } from "../repositories/InMemoryRepository";

export const ViewListOfAllPokemon = () => {
  const repo = new InMemoryRepository();
  const pokemonGetter = new PokemonGetter(repo);
  return pokemonGetter.getListOfAllPokemon();
};
