import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from './Registration.module.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type RegistrationProps = {
  onSelectUserName: (participantName: string) => void;
};

function Registration({ onSelectUserName }: RegistrationProps): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [disable, setDisable] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch('https://json-server.machens.dev/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    refreshUsers();
    setFirstName('');
    setLastName('');
    setDisable(true);
  }

  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  //async function handleSelectClick
  async function refreshUsers() {
    const response = await fetch('https://json-server.machens.dev/users');
    const newUsers = await response.json();
    setUsers(newUsers);
  }

  useEffect(() => {
    refreshUsers();
  }, []);

  const userOptions = users.map((user) => (
    <option key={user.id}>
      {user.firstName} {user.lastName}
    </option>
  ));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select onChange={(event) => onSelectUserName(event.target.value)}>
        <option>Teilnehmer wählen</option>
        {userOptions}
      </select>
      <span>or create a new user</span>
      <input
        type="text"
        placeholder="vorname"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="nachname"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <input
        disabled={disable}
        className={styles.submit}
        type="submit"
        value="dance! dance! dance!"
      />
    </form>
  );
}

export default Registration;
