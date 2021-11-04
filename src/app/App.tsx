import React, { useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/title';
import Registration from './components/Registration/Registration';
import SplashImage from './components/Title/SplashImage/SplashImage';

function App(): JSX.Element {
  const [selectedName, setSelectedName] = useState('');
  console.log(selectedName);

  let content;

  if (selectedName) {
    content = <p>Please add some songs</p>;
  } else {
    content = <Registration value={selectedName} onChange={setSelectedName} />;
  }

  return (
    <main className={styles.container}>
      <div>
        <Title text={selectedName ? `Hi ${selectedName}` : 'Bergfest.'} />
        {content}
      </div>
      <div>
        <h2 className={styles.explanation}>Welchen Song wünscht du dir?</h2>
      </div>
      <SplashImage
        url="https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        alt="Stop thinking, start drinking"
      />
    </main>
  );
}

export default App;
