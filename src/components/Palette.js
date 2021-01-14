import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { BiHighlight, BiMinus, BiPlus } from 'react-icons/bi';

import transparent from "./transparent.jpg";
import Quote from "./Quote.js";

import '../styles/Palette.css';

export default function Palette({ fetchQuote, quote }) {
  const [fontStyle, setFontStyle] = useState("Poppins");
  const [fontSize, setFontSize] = useState(15);
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [nthImage, setNthImage] = useState(0);

  const imgArray = [
    "55e1d3464f55b108f5d0846096293e7d1d3cdfe25b4c704f742f7ed19348c759_1280.jpg",
    "57e1dc444d57af14f6da8c7dda7936771637dde454596c48732e7bd19249c35bb8_1280.jpg",
    "55e1d6464255a914f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "57e2dd414953a814f6da8c7dda7936771637dde454596c48732e7bd19249c350be_1280.jpg",
    "57e1d5434857a814f6da8c7dda7936771637dde454596c48732e7bd19249c25eb9_1280.jpg",
    "57e5d447485baa14f6da8c7dda7936771637dde454596c48732e7bd19249c250b9_1280.jpg",
    "54e2d04b4c5aad14f6da8c7dda7936771637dde454596c48732e7bd19249c25ab9_1280.jpg",
    "5ee2dc434a51b108f5d0846096293e7d1d3cdfe25b4c704f742f7ed1934bcd5e_1280.jpg",
    "57e2dd414953a814f6da8c7dda7936771637dde454596c48732e7bd19249c350be_1280.jpg",
    "55e1d6464255a914f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "54e0d5464a54aa14f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "54e6d4444b53ae14f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "57e3d2404b55ad14f6da8c7dda7936771637dde454596c48732e7bd19249c358be_1280.jpg",
    "54e8d1454857ad14f6da8c7dda7936771637dde454596c48732e7bd19249c05ab9_1280.jpg",
    "52e7d5434f53a814f6da8c7dda7936771637dde454596c48732e7bd19249c158bf_1280.jpg",
    "54e0d5474e5aaf14f6da8c7dda7936771637dde454596c48732e7bd19249c158bf_1280.jpg"
  ];

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

  // increase image order when clicked
  function handleClickImage() {
    if (nthImage === imgArray.length - 1) {
      setNthImage(0);
    } else {
      setNthImage(nthImage + 1);
    }
  };

  // increase image order when clicked
  function handleChangeColor(color) {
    setBackgroundColor(color.rgb);
    setImageUrl("");
  };

  // display color picker when isDisplay is true
  function displayColorPicker() {
    if (isDisplay) {
      return (
        <ChromePicker
          color={backgroundColor}
          onChange={handleChangeColor}
        />
      )
    }
  }

  // display random images when isImage is true
  function displayRandomImages() {
    const repeatedUrl = "https://pixabay.com/get/";
    let currImage = repeatedUrl + imgArray[nthImage];

    if (isImage) {
      return (
        <div>
          <img src={currImage} className="preview-image" />
          <button onClick={() => setImageUrl(currImage)}>Use Image</button>
          <button onClick={handleClickImage}>Try Another</button>
        </div>
      )
    }
  }

  if (imageUrl === "") {
    var backgroundImageButtonStyle = {
      backgroundImage: "url(" + transparent + ")"
    }
  } else {
    var backgroundImageButtonStyle = {
      backgroundImage: "url(" + imageUrl + ")",
      backgroundSize: "cover"
    }
  }


  return (
    <div>
      <div className="palette">
        <div className="palette-font-style">
          <select onChange={(event) => setFontStyle(event.target.value)}>
            <option value="Poppins, sans-serif">Poppins</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Courier, monospace">Courier</option>
            <option value="Comic Sans MS, Comic Sans, cursive">Comic Sans</option>
            <option value="Times, Times New Roman, serif">Times</option>
            <option value="Arial Narrow, sans-serif">Arial Narrow</option>
          </select>
          <div className="select-arrow"></div>
        </div>
        <div className="palette-font-color">
          <select onChange={(event) => setFontColor(event.target.value)}>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
          <div className="select-arrow"></div>
        </div>
        <div className="palette-font-size">
          <button onClick={handleClickDecrement}><BiMinus /></button>
          <p>{fontSize}px</p>
          <button onClick={handleClickIncrement}><BiPlus /></button>
        </div>
        <div className="palette-background-color">
          <button onClick={() => setIsDisplay(!isDisplay)} />
          {displayColorPicker()}
        </div>
        <div className="palette-background-image">
          <button onClick={() => setIsImage(!isImage)}
            style={backgroundImageButtonStyle} />
          {displayRandomImages()}
        </div>
        <button
          className="palette-highlight"
          onClick={() => setIsHighlight(!isHighlight)}>
          <BiHighlight />
        </button>
        <button
          className="palette-new-quote"
          onClick={fetchQuote}>New Quote</button>
      </div>
      <Quote
        quote={quote}
        fontStyle={fontStyle}
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        isHighlight={isHighlight}
        imageUrl={imageUrl}
      />
    </div>
  )
}