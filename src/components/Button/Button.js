import React from 'react';
import styles from './Button.module.css';

export function Button({ onButtonClick }) {
  return (
    <button
      type="button"
      onClick={() => onButtonClick()}
      className={styles.button}
    >
      Load more
    </button>
  );
}
