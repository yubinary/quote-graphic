import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

import '../styles/Palette.css';

export default function Palette({ fetchQuote }) {
  const [fontStyle, setFontStyle] = useState("");
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
    setFontSize(fontSize - 1);
  };

  // increase font size when clicked
  function handleClickIncrement() {
    setFontSize(fontSize + 1);
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
    <div className="palette">
      <select onChange={handleChangeFontStyle}>
        <option value="monospace">Monospace</option>
        <option value="Georgia">Georgia</option>
        <option value="Gill Sans">Gill Sans</option>
        <option value="sans-serif">Sans-serif</option>
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
  )
}