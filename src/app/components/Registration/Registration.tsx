import React, { useState } from 'react';
import styles from './Registration.module.css';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [lied, setLied] = useState('');
  const [interpret, setInterpret] = useState('');

  console.log(name, lied, interpret);
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="mein lieblingslied"
        value={lied}
        onChange={(event) => setLied(event.target.value)}
      />

      <input
        type="text"
        placeholder="und das ist von..."
        value={interpret}
        onChange={(event) => setInterpret(event.target.value)}
      />

      <input
        className={styles.submit}
        type="submit"
        value="dance! dance! dance!"
      />
    </form>
  );
}

export default Registration;
