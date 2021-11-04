import React from 'react';
import styles from './SplashImage.module.css';

type SplashImageProps = {
  url: string;
  alt: string;
};

function SplashImage({ url, alt }: SplashImageProps) {
  return <img src={url} alt={alt} className={styles.image} />;
}

export default SplashImage;
