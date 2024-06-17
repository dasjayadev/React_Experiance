import React, { useEffect, useRef } from 'react';
import '../App.css'

function OtpAssig() {
  let input = useRef()
  // useEffect(()=>{
  //   input.current.focus()
  // },[])
  function changeHandler(){
    if(input.current.value){

    }
    console.log(input.current.value);
  }
  return (
    <>
        <h1>Hello Assignment 2 OTP</h1>
        <div>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
            <input type="number" className="otp-input" onChange={changeHandler} ref={input}/>
        </div>
    </>
  );
}

export default OtpAssig;
