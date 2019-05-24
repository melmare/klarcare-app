import React from 'react';
import Entry from './Entry';

export default function NewsList({ newsList }) {
  return (
    <>
      {newsList.map(entry => (
        <Entry entry={entry} />
      ))}
    </>
  );
}