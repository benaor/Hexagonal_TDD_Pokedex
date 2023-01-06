import { Pokemon } from "../../../../../core/pokemon/domain/entities/Pokemon";

describe("Pokemon", () => {
  it("should set description after instanciation", () => {
    // Arrange
    const pikachu = new Pokemon(25, "Pikachu", ["Electric"]);

    // Act
    pikachu.setDescription("Pikachu est jaune");
    pikachu.setImage("Pikachu image");

    // Assert
    expect(pikachu.description).toEqual("Pikachu est jaune");
    expect(pikachu.image).toEqual("Pikachu image");
  });
});
