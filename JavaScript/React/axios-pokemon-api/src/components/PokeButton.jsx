import React, { useState, useEffect } from 'react'
import axios from 'axios';

const PokeButton = () => {


    const [ state, setState ] = useState({
        fetchPokemon: false,
        pokemon: []
    });

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => setState({
                ...state, 
                pokemon: response.data.results
            }))
    }, []);

    const OnClickHandler = () => {
        setState({
            ...state,
            fetchPokemon: true
        });
    }

    return (
        <div>
            <button onClick={OnClickHandler}>Fetch Pokemon</button>
            {state.fetchPokemon &&
                <ul>
                    {state.pokemon.map((item, i) => {
                        return(<li key={i}>{item.name}</li>)
                    })}
                </ul>
            }
        </div>
    )
}

export default PokeButton
