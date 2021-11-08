import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Title from './components/Title/title';
import Registration from './components/Registration/Registration';
import SplashImage from './components/Title/SplashImage/SplashImage';
import Songs from './components/Songs/Songs';

function App(): JSX.Element {
  const [selectedName, setSelectedName] = useState<string | null>(
    sessionStorage.getItem('selectedName')
  );

  useEffect(() => {
    if (selectedName) {
      sessionStorage.setItem('selectedName', selectedName);
    } else {
      sessionStorage.removeItem('selectedName');
    }
  }, [selectedName]);

  let content;

  useEffect(() => {
    document.title = selectedName ? `Hi ${selectedName}` : 'Bergfest';
  });

  if (selectedName) {
    content = <p>Was ist dein Lieblingssong?</p>;
    content = <Songs fullUserName={selectedName} />;
  } else {
    content = <Registration onSelectUserName={setSelectedName} />;
  }

  return (
    <main className={styles.container}>
      <div>
        <Title text={selectedName ? `Hi ${selectedName}` : 'Bergfest.'} />
      </div>
      <div>
        {content}
        {selectedName !== null && (
          <button
            className={styles.logOutButton}
            onClick={() => setSelectedName(null)}
          >
            Logout user
          </button>
        )}
      </div>
      {/* <div>
        <h2 className={styles.explanation}>Welchen Song wünscht du dir?</h2>
      </div> */}
      <SplashImage
        url="https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        alt="Stop thinking, start drinking"
      />
    </main>
  );
}

export default App;
