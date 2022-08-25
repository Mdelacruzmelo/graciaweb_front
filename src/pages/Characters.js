import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CharacterComponent from '../components/Character';
import Header from '../components/Header';
import AxiosInstance from '../services/axios';

const Characters = () => {

    const [search, setSearch] = useState()

    const listCharacters = []

    const [characters, setCharacters] = useState(listCharacters)
    console.log('~ characters', characters)

    useEffect(() => {
        AxiosInstance.get('/characters')
            .then(response => {
                setCharacters(response.data)
            })
    }, [])

    return (
        <div className="page">
            <Header search={search} setSearch={setSearch} />
            {characters.map((character, index) => {
                return (
                    <CharacterComponent key={index} character={character} />
                )
            })}
        </div>
    )
}


export default Characters