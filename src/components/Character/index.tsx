import { Character } from '../../constant/character'
import styles from './style.module.scss'

interface CharacterProps {
    character: Character
}

const CharacterComponent = ({ character }: CharacterProps) => {
    return (
        <div className={styles.characterCard}>
            <div>
                <label>Name</label>
                {character.name}
            </div>
            <div>
                <label>Eye color</label>
                {character.eye_color}
            </div>
            <div className={styles.films}>
                <label>Films</label>
                {character.films && character.films.map((film) => {
                    return (
                        <div className={styles.film}>
                            {film}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default CharacterComponent