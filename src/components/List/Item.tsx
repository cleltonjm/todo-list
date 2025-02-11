import { TrashSimple } from 'phosphor-react'
import styles from './Item.module.css'

export default function Item() {
    return (
        <div className={styles.container}>
            <label htmlFor="checkbox">
                <input type="checkbox" />
                Adicionando uma tarefa
                <TrashSimple size={16} color="#808080" />
            </label>
        </div>
    )
}