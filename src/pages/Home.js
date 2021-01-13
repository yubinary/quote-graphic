import React, { useState, useEffect } from 'react';
import axios from "axios";

import Palette from "../components/Palette.js";

import '../styles/Home.css';

export default function Home() {
  const [quote, setQuote] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    fetchQuote();
  }, []);

  // make get quote request to Quotable API
  function fetchQuote() {
    let url = "https://api.quotable.io/random?maxLength=80&tags=famous-quotes";

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
        <p>Create and share beautiful quotes in minutes.</p>
        <p>Fully customizable quote. Start by changing color, style, and size!</p>
      </div>
      <div className="home-content">
        <Palette
          fetchQuote={fetchQuote}
          quote={quote}
        />
      </div>
      <div className="home-footer">
        <div className="home-footer-links">
          <a href="/about">about</a>
          <a href="https://github.com/yubinary/quote-graphic">github</a>
          <a href="https://github.com/yubinary/quote-graphic/issues/new">feedback</a>
        </div>
        <p>© Copyright Yubin Heo. All Rights Reserved.</p>
      </div>
    </div>
  )
}