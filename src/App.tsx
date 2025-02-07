import Button from './components/Button/Button';
import ListHeader from './components/List/ListHeader';
import Header from './components/Header/Header';
import Input from './components/Input/Input';

import './global.css';
import styles from './App.module.css';

export default function App() {
  return (
    <main>
      <Header />

      <section>
        <div className={styles.form}>
          <Input />
          <Button />
        </div>

        <div className={styles.tasksList}>
          <ListHeader />
        </div>
      </section>
    </main>
  )
}
