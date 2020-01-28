import React, {Component} from 'react';
import Result, { SearchState, Pokemon } from './models/pokemonSearchModel';

export class PokemonSearch extends Component<Result, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;

    constructor(props: Result) {
        super(props);
        this.state = {
            error: false,
            pokemon: null
        };
        this.pokemonRef = React.createRef();
    }

    onSearchClick = (): void => {
        const inputValue = this.pokemonRef.current.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then((res) => {
            if (res.status !== 200) {
                this.setState({error: true});
                return;
            }
            res.json().then((data) => {
                this.setState({
                    error: false,
                    pokemon: {
                        name: data.name,
                        numberOfAbilites: data.abilities.length,
                        baseExperience: data.base_experience,
                        imageUrl: data.sprites.front_default
                    }
                });
            });
        });
    };

    result(error: boolean, pokemon: Pokemon): any {
        if (error) {
            return (<p>Pokemon not found, please try again</p>);
        } else if (this.state.pokemon) {
            return (
                <div>
                    <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image"/>
                    <p>
                        {pokemon.name} has {pokemon.numberOfAbilites} abilities and{' '}
                        {pokemon.baseExperience} base experience points
                    </p>
                </div>
            );
        }
    }

    render() {
        const {name, numberOfPokemons} = this.props;
        const {error, pokemon} = this.state;

        return (
            <div>
                <p>
                    User {name}{' '}
                    {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
                </p>
                <input type="text" ref={this.pokemonRef}/>
                <button onClick={this.onSearchClick} className="my-button">
                    Search
                </button>
                {this.result(error, pokemon)}
            </div>
        );
    }
}

export default PokemonSearch;