import React from 'react';

import '../styles/Quote.css';

export default function Quote({ author, content }) {

  return (
    <div className="quote">
      <p>{author}</p>
      <p>{content}</p>
    </div>
  )
}