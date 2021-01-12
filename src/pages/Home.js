import React, { useState, useEffect } from 'react';
import axios from "axios";

import Palette from "../components/Palette.js";
import Quote from "../components/Quote.js";

import '../styles/Home.css';

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
    <div className="home">
      <div className="home-header">
        <h1>Quote Graphic</h1>
        <p>Design your own blah blah blah blah blah blah</p>
      </div>
      <div className="home-content">
        <Palette fetchQuote={fetchQuote} />
        <Quote author={quote.author} content={quote.content} />
      </div>
      <div className="home-footer">
        <p>Github</p>
      </div>
    </div>
  )
}