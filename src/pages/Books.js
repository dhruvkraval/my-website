import React from 'react';
import { Link } from 'react-router-dom';

const generalBooks = [
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    note: 'The best book on startups. Every page has something worth underlining.',
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    note: 'Dense with ideas on wealth, happiness, and how to think.',
  },
  {
    title: 'Principles',
    author: 'Ray Dalio',
    link: '/principles',
    note: 'A list of good quotes from this book.',
  },
];

const psychologyBooks = [
  {
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    author: 'Bessel van der Kolk',
    note: '',
  },
];

const historyBooks = [
  {
    title: 'India After Gandhi: The History of the World\'s Largest Democracy',
    author: 'Ramachandra Guha',
    note: '',
  },
];

function BookList({ books }) {
  return (
    <ul style={{ listStyle: 'disc', paddingLeft: '32px', marginTop: '8px' }}>
      {books.map((b, i) => (
        <li key={i} style={{ marginBottom: '4px', color: '#333' }}>
          {b.link ? <Link to={b.link}><em>{b.title}</em></Link> : <em>{b.title}</em>}
          {b.note && <span style={{ color: '#666' }}> — {b.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function Books() {
  return (
    <>
      <p className="section-label">Books I liked</p>
      <p style={{ marginBottom: '16px', color: '#444' }}>I would like to one day have read a lot of books, so this page keeps track of that for me.</p>
      <BookList books={generalBooks} />

      <p className="section-label">Psychology</p>
      <BookList books={psychologyBooks} />

      <p className="section-label">History</p>
      <BookList books={historyBooks} />
    </>
  );
}
