import React, { FormEvent, useState } from 'react';
import styles from './Songs.module.css';

type SongsProps = {
  fullUserName: string;
};

function Songs({ fullUserName }: SongsProps): JSX.Element {
  /*  const [fullUserName, setFullUserName] = useState(''); */
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch('https://json-server.machens.dev/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullUserName: fullUserName,
        artist: artist,
        title: title,
      }),
    });
  }

  /*   function handleFullUserNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFullUserName(event.target.value);
  }

  function handleArtistChange(event: ChangeEvent<HTMLInputElement>) {
    setArtist(event.target.value);
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
 */
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Was ist dein Lieblingssong?</h2>
      {/* <input
        type="text"
        placeholder="full user name"
        value={fullUserName}
        onChange={handleFullUserNameChange}
      /> */}
      <input
        type="text"
        placeholder="artist"
        value={artist}
        onChange={(event) => setArtist(event.target.value)}
      />
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className={styles.submit}
        type="submit"
        value="dance! dance! dance!"
      />
    </form>
  );
}

export default Songs;
