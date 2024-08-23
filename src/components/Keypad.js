// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handleChange(event){
        console.log("Entering password...",event.target.value)
    }
    return(
        <div>
    <input type="password" onChange={handleChange}></input>
    
    </div>

    )
}
export default Keypad