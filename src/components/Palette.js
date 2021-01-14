import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { BiHighlight, BiMinus, BiPlus } from 'react-icons/bi';
import { FiAlignLeft, FiAlignCenter, FiAlignRight } from 'react-icons/fi';

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
  const [textAlign, setTextAlign] = useState("center");

  const imgArray = [
    "57e8d344485aa914f6da8c7dda7936771637dde454596c48732e7bd19e4ec358b1_1280.jpg",
    "57e8d34a435aa514f6da8c7dda7936771637dde454596c48732e7bd19e4ec05ab1_1280.jpg",
    "55e1dd444e51b108f5d0846096293e7d1d3cdfe25b4c704f742f7edd9449cd5c_1280.jpg",
    "5ee3dc414a5ab108f5d0846096293e7d1d3cdfe25b4c704f742f7edd9449c150_1280.jpg",
    "52e1d142435bb108f5d0846096293e7d1d3cdfe25b4c704f742f7edd9445c05d_1280.jpg",
    "57e2d1464253ab14f6da8c7dda7936771637dde454596c48732e7bd19e4ec15bb1_1280.jpg",
    "55e6d5464f56ab14f6da8c7dda7936771637dde454596c48732e7bd19e4ec358b1_1280.jpg",
    "51e3d4414b51b108f5d0846096293e7d1d3cdfe25b4c704f742f7edd9449c651_1280.jpg",
    "55e2d5454f51ac14f6da8c7dda7936771637dde454596c48732e7bd19e4ec65fba_1280.jpg",
    "57e1dc444d57af14f6da8c7dda7936771637dde454596c48732e7bd19249c35bb8_1280.jpg",
    "57e1d5434857a814f6da8c7dda7936771637dde454596c48732e7bd19249c25eb9_1280.jpg",
    "57e5d447485baa14f6da8c7dda7936771637dde454596c48732e7bd19249c250b9_1280.jpg",
    "54e2d04b4c5aad14f6da8c7dda7936771637dde454596c48732e7bd19249c25ab9_1280.jpg",
    "5ee2dc434a51b108f5d0846096293e7d1d3cdfe25b4c704f742f7ed1934bcd5e_1280.jpg",
    "54e0d5464a54aa14f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "54e6d4444b53ae14f6da8c7dda7936771637dde454596c48732e7bd19249c35cbd_1280.jpg",
    "52e6d7424951a814f6da8c7dda7936771637dde454596c48732e7bd19e4ecc51b0_1280.jpg",
    "57e3d2404b55ad14f6da8c7dda7936771637dde454596c48732e7bd19249c358be_1280.jpg",
    "54e8d1454857ad14f6da8c7dda7936771637dde454596c48732e7bd19249c05ab9_1280.jpg",
    "5ee4d4474e53b108f5d0846096293e7d1d3cdfe25b4c704f742f7edd9444c45d_1280.jpg",
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
          className="color-modal"
        />
      )
    }
  }

  // increase image order when clicked
  function handleClickTextAlign() {
    if (textAlign === "center") {
      setTextAlign("right");
    } else if (textAlign === "right") {
      setTextAlign("left");
    } else {
      setTextAlign("center");
    }
  };

  // display random images when isImage is true
  function displayRandomImages() {
    const repeatedUrl = "https://pixabay.com/get/";
    let currImage = repeatedUrl + imgArray[nthImage];

    if (isImage) {
      return (
        <div className="image-modal">
          <img src={currImage} className="image-preview" />
          <div className="image-button">
            <button className="use" onClick={() => setImageUrl(currImage)}>Use Image</button>
            <button onClick={handleClickImage}>Try Another</button>
          </div>
        </div>
      )
    }
  }

  // display text align icon
  function displayTextAlignIcon() {
    if (textAlign === "center") {
      return (
        <FiAlignCenter />
      )
    } else if (textAlign === "left") {
      return (
        <FiAlignLeft />
      )
    } else {
      return (
        <FiAlignRight />
      )
    }
  }

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

  if (imageUrl === "") {
    var backgroundImageButtonStyle = {
      backgroundImage: "url(" + transparent + ")"
    }
  } else {
    var backgroundImageButtonStyle = {
      backgroundImage: "url(" + imageUrl + ")",
      backgroundSize: "cover",
    }
  }

  var backgroundColorStyle = {
    backgroundColor: makeRgb(backgroundColor)
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
          <button
            onClick={() => setIsDisplay(!isDisplay)}
            style={backgroundColorStyle} />
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
          className="palette-highlight"
          onClick={handleClickTextAlign}>
          {displayTextAlignIcon()}
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
        textAlign={textAlign}
        makeRgb={makeRgb}
      />
    </div>
  )
}