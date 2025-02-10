import styles from './ListHeader.module.css'
import { ClipboardText } from 'phosphor-react'

export default function Empty() {
    return (
        <div className={styles.container}>
            <ClipboardText className={styles.img} size={56} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}