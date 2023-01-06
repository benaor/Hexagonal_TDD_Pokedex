import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonRepository } from "../../domain/gateways/PokemonRepository";

export class InMemoryRepository implements PokemonRepository {
  getAllPokemon(): Array<Pokemon> {
    return [
      new Pokemon(26, "pikachu", ["Electric"]),
      new Pokemon(6, "dracaufeu", ["Fire", "Flying"]),
    ];
  }

  getPokemonByNumero(numero: number): Pokemon {
    return new Pokemon(numero, "pikachu", ["Electric"]);
  }
}
