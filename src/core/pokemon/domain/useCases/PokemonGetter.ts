import { Pokemon } from "../entities/Pokemon";
import { PokemonRepository } from "../gateways/PokemonRepository";

export class PokemonGetter {
  constructor(private pokemonRepository: PokemonRepository) {}

  getDetailsOfPokemonNumero(numero: number): Pokemon {
    return this.pokemonRepository.getPokemonByNumero(numero);
  }

  getListOfAllPokemon(): Array<Pokemon> {
    return this.pokemonRepository.getAllPokemon()
  }
}
