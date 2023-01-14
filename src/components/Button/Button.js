import React from 'react';

export function Button({ loadMore }) {
  return (
    <button onClick={() => loadMore()} type="button">
      Load more
    </button>
  );
}
