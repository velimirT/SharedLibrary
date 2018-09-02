import React from 'react';

export default function LibrariesSlider ({hidden, name, img, address, description, books, onClickClose}) {
  console.log(name);
  return (
    <div className={hidden ? "library-slider-shown library-slider" : "library-slider"} >
      <button onClick={onClickClose}>Close</button>
      <p>{name}</p>
      <img className="library-slider__img" src={img} alt="library data"/>
      <address className="library-slider__address">Address: {address ? address : 'Not available'}</address>
      <p>Description: {description ? description : 'Not available'}</p>
      <p>Number: {books ? books.length : 'Not available'}</p>
    </div>
  )};
