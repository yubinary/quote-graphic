import React from 'react';

export default function Quote({ author, content }) {

  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  )
}