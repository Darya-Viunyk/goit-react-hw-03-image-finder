import React from 'react';

export function Button({ onButtonClick }) {
  return (
    <button type="button" onClick={() => onButtonClick()}>
      Load more
    </button>
  );
}
