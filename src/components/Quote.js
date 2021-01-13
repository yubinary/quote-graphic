import React from 'react';

import '../styles/Quote.css';

export default function Quote({ author, content, fontStyle, fontSize, fontColor, backgroundColor }) {

  // helper function that cleans color code for style
  function makeRgb(color) {
    let rgb = "rgb(";
    for (var key in color) {
      if (key !== "a") {
        rgb += color[key] + ",";
      } else {
        rgb += color[key];
      }
    }
    return rgb + ")";
  }

  var quoteStyle = {
    backgroundColor: makeRgb(backgroundColor)
  }

  var quoteTextStyle = {
    fontFamily: fontStyle,
    fontSize: fontSize + 'px',
    color: fontColor,
  };

  console.log(fontStyle)

  return (
    <div className="quote" style={quoteStyle}>
      <div className="quote-text" style={quoteTextStyle}>
        <h1>{content}</h1>
        <p>{author}</p>
      </div>
    </div>
  )
}