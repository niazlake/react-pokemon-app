export interface SearchState {
    error: boolean;
    pokemon: Pokemon;
}

export interface Pokemon {
    name: string;
    numberOfAbilites: number;
    baseExperience: number;
    imageUrl: string;
}

export default interface Result {
    name: string;
    numberOfPokemons?: number;
}