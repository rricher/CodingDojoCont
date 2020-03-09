import React, { useState, useEffect } from 'react'

const PokeButton = () => {


    const [ state, setState ] = useState({
        fetchPokemon: false,
        pokemon: []
    });
    let next = "https://pokeapi.co/api/v2/pokemon?limit=807";

    useEffect(() => {
        fetch(next)
            .then(response => response.json())
            .then(response => setState({
                ...state, 
                pokemon: response.results
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
