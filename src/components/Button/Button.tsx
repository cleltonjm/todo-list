import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'

export default function Button() {
    return (
        <button className={styles.button} type="button">
            Criar
            <PlusCircle size={16} />
        </button>
    )
}