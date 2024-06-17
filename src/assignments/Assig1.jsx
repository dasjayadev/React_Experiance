import React, { useState } from 'react';

function Assig1() {
    let [formValue, setFormValue] = useState({
        field1 : "",
        field2 : "",
        field3 : "",
        field4 : "",
        field5 : "",
        field6 : ""
    })
    function handelSubmitAndChange(event){
        let {name,value,type} = event.target
        if(type === "text"){
            setFormValue((pre)=>{
                return({...pre,[name]:value})
            })
        }
        else{
            console.log(formValue);
        }
    }
  return (
    <>
     <h1> Hello Assignment 1</h1> 

     <input type="text" name='field1' value={formValue.field1} onChange={handelSubmitAndChange}/>
     <br />
     <input type="text" name='field2' value={formValue.field2} onChange={handelSubmitAndChange}/>
     <br />
     <input type="text" name='field3' value={formValue.field3} onChange={handelSubmitAndChange}/>
     <br />
     <input type="text" name='field4' value={formValue.field4} onChange={handelSubmitAndChange}/>
     <br />
     <input type="text" name='field5' value={formValue.field5} onChange={handelSubmitAndChange}/>
     <br />
     <input type="text" name='field6' value={formValue.field6} onChange={handelSubmitAndChange}/>
     <br />
     <button onClick={handelSubmitAndChange}>Submit here</button>
    </>
  );
}

export default Assig1;
