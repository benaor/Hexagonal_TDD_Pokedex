import { Pokemon } from "../../../../core/pokemon/domain/entities/Pokemon";
import { PokemonRepository } from "../../../../core/pokemon/domain/gateways/PokemonRepository";
import { PokemonGetter } from "../../../../core/pokemon/domain/useCases/PokemonGetter";

class InMemoryRepository implements PokemonRepository {
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

describe("Display Pokemon Details", () => {
  it("should return pikachu", () => {
    // Arrange
    const inMemoryRepository = new InMemoryRepository();
    const pokemonManager = new PokemonGetter(inMemoryRepository);

    // Act
    const pokemon25 = pokemonManager.getDetailsOfPokemonNumero(25);

    // Assert
    expect(pokemon25).toEqual({
      numero: 25,
      name: "pikachu",
      type: ["Electric"],
    });
  });

  it("should return Array of 2 pikachu", () => {
    // Arrange
    const inMemoryRepository = new InMemoryRepository();
    const pokemonManager = new PokemonGetter(inMemoryRepository);

    // Act
    const ListOfPokemon = pokemonManager.getListOfAllPokemon();

    // Assert
    expect(ListOfPokemon).toEqual([
      {
        numero: 26,
        name: "pikachu",
        type: ["Electric"],
      },
      {
        numero: 6,
        name: "dracaufeu",
        type: ["Fire", "Flying"],
      },
    ]);
  });
});
