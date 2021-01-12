import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

export default function Palette({ fetchQuote }) {
  const [fontStyle, setFontStyle] = useState("");
  const [fontSize, setFontSize] = useState(15);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  function handleChangeFont(event) {
    setFontStyle(event.target.value);
  };

  function handleClickDecrement() {
    setFontSize(fontSize - 1);
  };

  function handleClickIncrement() {
    setFontSize(fontSize + 1);
  };

  function handleChangeBackgroundColor(color) {
    setBackgroundColor(color.hex);
  };

  function handleClickDisplay() {
    setIsDisplay(!isDisplay);
  }

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
      <select onChange={handleChangeFont}>
        <option value="monospace">Monospace</option>
        <option value="Georgia">Georgia</option>
        <option value="Gill Sans">Gill Sans</option>
        <option value="sans-serif">Sans-serif</option>
      </select>
      <div>
        <button onClick={handleClickDecrement}>-</button>
        <p>{fontSize}</p>
        <button onClick={handleClickIncrement}>+</button>
      </div>
      <div>
        <button onClick={handleClickDisplay}>Change Color</button>
        {displayColorPicker()}
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  )
}