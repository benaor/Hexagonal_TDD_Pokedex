import { InMemoryRepository } from "../../../../../core/pokemon/application/repositories/InMemoryRepository";
import { ViewDetailsOfPokemon } from "../../../../../core/pokemon/application/useCases/ViewDetailsOfPokemon";
import { ViewListOfAllPokemon } from "../../../../../core/pokemon/application/useCases/ViewListOfAllPokemon";
import { Pokemon } from "../../../../../core/pokemon/domain/entities/Pokemon";

describe("View list of all pokemon", () => {
  it("should return array of bulbizarre and his evolution", async () => {
    // Arrange
    const mockedPokemons = jest
      .fn()
      .mockReturnValue([
        new Pokemon(1, "bulbizarre", ["Grass"]),
        new Pokemon(2, "herbizarre", ["Grass"]),
        new Pokemon(3, "florizarre", ["Grass", "Poison"]),
      ]);
    jest
      .spyOn(InMemoryRepository.prototype, "getAllPokemon")
      .mockImplementation(mockedPokemons);

    // Act
    const listOfPokemon: Pokemon[] = ViewListOfAllPokemon();

    // Assert
    expect(listOfPokemon).toEqual([
      {
        numero: 1,
        name: "bulbizarre",
        type: ["Grass"],
      },
      {
        numero: 2,
        name: "herbizarre",
        type: ["Grass"],
      },
      {
        numero: 3,
        name: "florizarre",
        type: ["Grass", "Poison"],
      },
    ]);
  });
});
