import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Quote from "./Quote.js";

import '../styles/Palette.css';

export default function Palette({ fetchQuote, author, content }) {
  const [fontStyle, setFontStyle] = useState("Poppins");
  const [fontSize, setFontSize] = useState(15);
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  // handle font style change
  function handleChangeFontStyle(event) {
    setFontStyle(event.target.value);
  };

  // handle font color change
  function handleChangeFontColor(event) {
    setFontColor(event.target.value);
  }

  // decrease font size when clicked
  function handleClickDecrement() {
    if (fontSize > 10) {
      setFontSize(fontSize - 1);
    }
  };

  // increase font size when clicked
  function handleClickIncrement() {
    if (fontSize < 20) {
      setFontSize(fontSize + 1);
    }
  };

  // handle background color change
  function handleChangeBackgroundColor(color) {
    setBackgroundColor(color.rgb);
  };

  // handle isDisplay when clicked
  function handleClickDisplay() {
    setIsDisplay(!isDisplay);
  }

  // display color picker when isDisplay is true
  function displayColorPicker() {
    if (isDisplay) {
      return (
        <ChromePicker
          color={backgroundColor}
          onChange={handleChangeBackgroundColor}
        />
      )
    }
  }

  return (
    <div>
      <div className="palette">
        <select onChange={handleChangeFontStyle}>
          <option value="Poppins, sans-serif">Poppins</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Courier, monospace">Courier</option>
          <option value="Comic Sans MS, Comic Sans, cursive">Comic Sans</option>
          <option value="Didot, serif">Didot, serif</option>
          <option value="Arial Narrow, sans-serif">Arial Narrow</option>
        </select>
        <div className="palette-font-size">
          <button onClick={handleClickDecrement}>-</button>
          <p>{fontSize}</p>
          <button onClick={handleClickIncrement}>+</button>
        </div>
        <div>
          <button onClick={handleClickDisplay}>Change Color</button>
          {displayColorPicker()}
        </div>
        <div>
          <select onChange={handleChangeFontColor}>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>
        <button onClick={fetchQuote}>New</button>
      </div>
      <Quote
        author={author}
        content={content}
        fontStyle={fontStyle}
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      />
    </div>
  )
}