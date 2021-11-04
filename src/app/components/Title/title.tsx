import React from 'react';
import styles from './title.module.css';

type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps): JSX.Element {
  return <h1 className={styles.title}>{text}</h1>;
}

export default Title;
