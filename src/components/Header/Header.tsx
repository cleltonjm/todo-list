import styles from './Header.module.css'

import rocket from '../../assets/rocket.png'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="Logotipo" />
            <span className={styles.to}>to</span><span className={styles.do}>do</span>
        </header>
    )
}