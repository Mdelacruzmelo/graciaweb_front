import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CharacterComponent from '../components/Character';
import Header from '../components/Header';
import AxiosInstance from '../services/axios';
import FadeIn from 'react-fade-in'

const Characters = () => {

    const [search, setSearch] = useState()
    const [characters, setCharacters] = useState([])
    const [films, setFilms] = useState([])

    useEffect(() => {
        AxiosInstance.get('/characters')
            .then(response => {
                setCharacters(response.data)
            })

        AxiosInstance.get(`${process.env.REACT_APP_SWAPI_URL}/films`)
            .then(response => {
                setFilms(response?.data?.results)
            })
    }, [])

    return (
        <FadeIn>
            <div className="page">
                <Header search={search} setSearch={setSearch} />
                {characters.length > 0 &&
                    characters.map((character, index) => {
                        return (
                            <CharacterComponent key={index} character={character} films={films} />
                        )
                    })}
            </div>
        </FadeIn>
    )
}


export default Characters