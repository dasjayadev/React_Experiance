import React,{createRef, useEffect, useRef, useState} from 'react'

function ControlanUncontrol() {
    let input=useRef()
    useEffect(()=>{
       input.current.focus()
    },[])
    function clickHandler()
    {
        console.log(input)
        if(input.current.value.length>0)
            {

            }
        console.log(input.current.value)
    }
   
    console.log('................................')
    // //this is for control component
    //  let [text,setText]  = useState('')
    //  let [error,setError]=useState(false)
    //  //this is changeHandler
    //  function changeHandler(e)
    //  {
    //     console.log('change handler')
    //     if(e.target.length>10)
    //         {
    //             console.log('hello1')
    //             setError(false)
    //         }
    //      setText(e.target.value)
    //  }
    //  function blurHandler()
    //  {
    //       if(text.length<10)
    //         {
    //             setError(true)
    //         }
    //         else{
    //             setError(false)
    //         }
    //  }
          
  return (
       <>
       {/* control
       <input type='text' placeholder='enter your name' onChange={changeHandler} onBlur={blurHandler} 
        style={{border:error?"1px solid red":"1px solid green"}}/> */}
        uncontrol
        <input type='text' placeholder='enter your name'  ref={input}/>
        {/* <button>control-click</button> */}
        <br/>
        <button onClick={clickHandler}>uncontrol-click</button>
       </>
  )
}

export default ControlanUncontrol