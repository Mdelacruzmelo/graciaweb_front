import styles from './style.module.scss'

const Header = ({ search, setSearch }: any) => {

    return (
        <div className={styles.searchComponent}>
            <input
                type="text"
                onChange={({ target }) => {
                    setSearch(target.value)
                }} />
        </div>
    )
}

export default Header