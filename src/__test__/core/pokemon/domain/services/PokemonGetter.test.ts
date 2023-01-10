import { InMemoryRepository } from "../../../../../core/pokemon/application/repositories/InMemoryRepository";
import { PokemonGetter } from "../../../../../core/pokemon/domain/useCases/PokemonGetter";

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

  it("should return Array of pikachu and dracaufeu", () => {
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
