import React from 'react';
import '../styles/Quote.css';

export default function Quote({
  quote,
  fontStyle,
  fontSize,
  fontColor,
  backgroundColor,
  isHighlight,
  imageUrl,
  textAlign,
  makeRgb }) {

  var quoteStyle = {
    backgroundColor: makeRgb(backgroundColor),
    backgroundImage: "url(" + imageUrl + ")",
    backgroundSize: "cover"
  }

  var quoteTextStyle = {
    fontFamily: fontStyle,
    fontSize: fontSize + 'px',
    color: fontColor,
    textAlign: textAlign
    // textShadow: "0px 2px 2px rgba(255, 255, 255, 0.4)"
  };

  if (isHighlight) {
    if (fontColor !== "white") {
      var quoteH1Style = {
        backgroundColor: "white"
      };

      var quotePStyle = {
        backgroundColor: "white"
      }
    } else {
      var quoteH1Style = {
        backgroundColor: "black"
      };

      var quotePStyle = {
        backgroundColor: "black"
      }
    }
  }

  return (
    <div className="quote" style={quoteStyle}>
      <div className="quote-text" style={quoteTextStyle}>
        <h1 style={quoteH1Style}>{quote.content}</h1>
        <br />
        <p style={quotePStyle}>{quote.author}</p>
      </div>
    </div>
  )
}