import { useEffect, useState } from 'react'
import { Character } from '../../constant/character'
import AxiosInstance from '../../services/axios'
import styles from './style.module.scss'

interface CharacterProps {
    character: Character,
    films: any
}

const CharacterComponent = ({ character, films }: CharacterProps) => {

    const [characterFilms, setCharacterFilms] = useState<any>([])
    const [id, setId] = useState<any>()

    useEffect(() => {

        // Get character films
        const existingFilms: any = []
        character.films.forEach((filmUrl) => {
            films.forEach((film: any) => {
                if (film.url === filmUrl) existingFilms.push(film)
            })
        })
        setCharacterFilms(existingFilms)

        // Set Character ID
        const urlArr = character.url.split('/')
        setId(urlArr[urlArr.length - 2])


    }, [films])

    const handleDelete = () => {
        AxiosInstance.delete(`${process.env.REACT_APP_BACKEND_URL}/characters/${id}`)
    }

    return (

        <div className={styles.characterCard}>

            <button onClick={handleDelete}>
                Delete
            </button>

            <div>
                <label>Name</label>
                {character.name}
            </div>
            <div>
                <label>Eye color</label>
                {character.eye_color}
            </div>
            <div>
                <label>Birth year</label>
                {character.birth_year}
            </div>
            <div>
                <label>Gender</label>
                {character.gender}
            </div>

            <div className={styles.films}>
                <label>Films</label>
                {characterFilms.length > 0 && characterFilms.map((film: any) => {
                    return (
                        <div className={styles.film}>
                            {film.title}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default CharacterComponent