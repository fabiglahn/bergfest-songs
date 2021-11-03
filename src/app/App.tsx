import React from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.title}>Bergfest.</h1>
        <h2 className={styles.explanation}>welchen song wünscht du dir?</h2>
        <form className={styles.form}>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="favorite song" />
          <input type="text" placeholder="performed by..." />
          <input
            className={styles.button}
            type="submit"
            value="dance! dance! dance!"
          />
        </form>
      </div>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        alt="Stop thinking, start drinking"
      />
    </main>
  );
}

export default App;
