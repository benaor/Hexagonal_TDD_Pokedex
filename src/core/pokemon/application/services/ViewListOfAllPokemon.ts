import { PokemonGetter } from "../../domain/useCases/PokemonGetter";
import { InMemoryRepository } from "../repositories/InMemoryRepository";

export const ViewListOfAllPokemon = () => {
  const repo = new InMemoryRepository();
  return new PokemonGetter(repo).getListOfAllPokemon();
};
