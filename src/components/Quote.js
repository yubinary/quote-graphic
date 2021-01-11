import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState({});

  // make get quote request to Quotable API
  function fetchQuote() {
    let url = "https://api.quotable.io/random";

    axios.get(url)
      .then(result => {
        console.log(result.data);
        setQuote(result.data);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(() => {
    fetchQuote();
  }, []);


  return (
    <div>
      <p>{quote.author}</p>
      <p>{quote.content}</p>
    </div>
  )
}