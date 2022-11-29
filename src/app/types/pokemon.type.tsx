import { PokemonDetailsType } from "./pokemon-details.type"
import { PokemonSpeciesType } from "./pokemon-species.type"

export type PokemonType = {
    id: number,
    name: string,
    pokemon_species_details: PokemonDetailsType[],
    required_for_evolution: PokemonSpeciesType[]
}