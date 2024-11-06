"use client"
import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(''); 

  const getValue = (event) => {
    const value = event.target.value; 

    if (value === 'AC') {
      setInputValue(''); 
    } else if (value === 'Back') {
      setInputValue(inputValue.slice(0, -1)); 
    } else if (value === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue('Error'); 
      }
    } else {
      setInputValue(inputValue + value); 
    }
  };

  return (
    <div className='container'>
      <h3>Calculator</h3>
      <div>
        <input 
          type='text' 
          value={inputValue} 
          placeholder='0' 
          readOnly 
        />
      </div>
      <br />
      <div className="button-container">
        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={getValue} value="AC">AC</button>
        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>
        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>
        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>
        <button onClick={getValue} value="0">0</button>
        <button onClick={getValue} value="Back">Back</button>
        <button onClick={getValue} value="=">=</button>
        <button onClick={getValue} value="/">/</button>
      </div>
    </div>
  );
};

export default Calculator;
