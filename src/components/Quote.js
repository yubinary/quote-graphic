import React from 'react';

import '../styles/Quote.css';

export default function Quote({ author, content }) {

  return (
    <div className="quote">
      <div className="quote-text">
        <h1>{content}</h1>
        <p>{author}</p>
      </div>
    </div>
  )
}