import React, { createContext, useState } from 'react'

export const DataContext = createContext({})

export default function DataProvider({ children }) {

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState("Jogador 1");
    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");

    return (
        <DataContext.Provider value={{ pokemonList, setPokemonList, playerOne, setPlayerOne, playerTwo, setPlayerTwo, currentPlayer, setCurrentPlayer }}>
            {children}
        </DataContext.Provider>
    )
}
