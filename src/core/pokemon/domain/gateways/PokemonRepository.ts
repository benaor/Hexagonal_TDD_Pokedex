import { Pokemon } from "../entities/Pokemon";

export interface PokemonRepository {
  getAllPokemon(): Array<Pokemon>;
  getPokemonByNumero(numero: number): Pokemon;
}
