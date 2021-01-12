import React, { useState, useEffect } from 'react';
import axios from "axios";

import Palette from "../components/Palette.js";
import Quote from "../components/Quote.js";

export default function Home() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuote();
  }, []);

  // make get quote request to Quotable API
  function fetchQuote() {
    let url = "https://api.quotable.io/random";

    axios.get(url)
      .then(result => {
        setQuote(result.data);
      })
      .catch(error => {
        console.error(error);
      })
  }


  return (
    <div>
      <Palette fetchQuote={fetchQuote} />
      <Quote author={quote.author} content={quote.content} />
    </div>
  )
}