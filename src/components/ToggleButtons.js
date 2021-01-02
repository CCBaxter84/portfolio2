import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ToggleButtons.css';

function ToggleButtons() {
  const [shortSelected, setShort] = useState(true);
  const [longSelected, setLong] = useState(false);
  const handleClick = event => {
    const { value } = event.target;
    if (value === 'short') {
      setShort(true);
      setLong(false);
    } else if (value === 'long') {
      setLong(true);
      setShort(false);
    }
  };
  return (
    <section className='buttons'>
        <Link to='/'>
          <button value='short' onClick={handleClick} className={shortSelected ? 'selected' : undefined}>Short</button>
        </Link>
        <Link to='/long'>
          <button value='long' onClick={handleClick} className={longSelected ? 'selected' : undefined}>Long</button>
        </Link>
      </section>
  );
}

export default ToggleButtons;