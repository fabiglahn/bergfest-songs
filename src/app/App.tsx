import React from 'react';
import styles from './App.module.css';
import Title from './components/Title/title';
import SplashImage from './components/Title/SplashImage/SplashImage';

function App(): JSX.Element {
  return (
    <main className={styles.container}>
      <Title text="Bergfest." />
      <div>
        <h2 className={styles.explanation}>Welchen Song wünscht du dir?</h2>
        <form className={styles.form}>
          <input type="text" placeholder="mein name" />
          <input type="text" placeholder="mein lieblingslied" />
          <input type="text" placeholder="und das ist von..." />
          <input
            className={styles.submit}
            type="submit"
            value="dance! dance! dance!"
          />
        </form>
      </div>
      <SplashImage
        url="https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        alt="Stop thinking, start drinking"
      />
    </main>
  );
}

export default App;
