import { PokemonGetter } from "../../domain/services/PokemonGetter";
import { InMemoryRepository } from "../repositories/InMemoryRepository";

export const ViewDetailsOfPokemon = (id: number) => {
  const repo = new InMemoryRepository();
  const pokemonGetter = new PokemonGetter(repo);
  return pokemonGetter.getDetailsOfPokemonNumero(id);
};
