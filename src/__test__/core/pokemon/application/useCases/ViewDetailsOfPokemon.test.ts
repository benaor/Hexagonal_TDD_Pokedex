import { InMemoryRepository } from "../../../../../core/pokemon/application/repositories/InMemoryRepository";
import { ViewDetailsOfPokemon } from "../../../../../core/pokemon/application/useCases/ViewDetailsOfPokemon";
import { Pokemon } from "../../../../../core/pokemon/domain/entities/Pokemon";

describe("View details of a pokemon", () => {
  it("should return bulbizarre", async () => {
    // Arrange
    const mockedPokemon = jest
      .fn()
      .mockReturnValue(new Pokemon(1, "bulbizarre", ["Grass"]));
    jest
      .spyOn(InMemoryRepository.prototype, "getPokemonByNumero")
      .mockImplementation(mockedPokemon);

    // Act
    const bulbi: Pokemon = ViewDetailsOfPokemon(1);

    // Assert
    expect(bulbi).toEqual({
      numero: 1,
      name: "bulbizarre",
      type: ["Grass"],
    });
  });
});
