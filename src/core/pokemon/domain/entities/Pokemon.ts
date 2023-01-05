import { PokemonType } from "../../../shared/domain/pokemonType";

export class Pokemon {
  constructor(
    public numero: number,
    public name: string,
    public type: [PokemonType, PokemonType?],
    public description?: string,
    public image?: string
  ) {}

  setDescription(description: string): void {
    this.description = description;
  }

  setImage(image: string): void {
    this.image = image;
  }
}
