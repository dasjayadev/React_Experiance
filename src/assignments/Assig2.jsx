import React, { useState } from 'react';

function Assig2() {
  const [count, setCount] = useState({ inc: 0, dec: 50, multi: 1 });
  const [inputValue, setInputValue] = useState('');

  function allBtnHandler(event) {
    event.preventDefault();
    let  action = event.target.innerText;

    setCount((prev) => {
      if (action === 'inc') {
        let  addition = prev.inc + parseInt(inputValue);
       if( addition > 100){
        return { inc: 0, dec: 50, multi: 1 };
       }
       return { ...prev, inc: addition };
      }
      if (action === 'dec') {
        return { ...prev, dec: prev.dec > 0 ? prev.dec - parseInt(inputValue) : 0 };
      }
      if (action === 'multi' && inputValue !== '') {
        let  newMultiValue = prev.multi * parseInt(inputValue);
        if (newMultiValue > 100) {
          return { inc: 0, dec: 50, multi: 1 };
        }
        return { ...prev, multi: newMultiValue };
      }
    //   return prev;
    });
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <h1>Hello Assignment 2</h1>
      <form>
        <div>
          inc : {count.inc}
          <br />
          dec : {count.dec}
          <br />
          multi : {count.multi}
        </div>
        <br />
        <div>
          <input
            type="number"
            placeholder="Enter any number from 1 to 100"
            value={inputValue}
            onChange={handleInputChange}
            style={{
                border: inputValue % 2 === 0 ? '5px solid green' : '5px solid red'
            }}
          />
          <input type="text" />
        </div>
        <br />
        <div>
          <button name="inc" onClick={allBtnHandler}>inc</button>
          <button name="dec" onClick={allBtnHandler}>dec</button>
          <button name="multi" onClick={allBtnHandler}>multi</button>
          <button>hello</button>
        </div>
      </form>
    </>
  );
}

export default Assig2;
