import React from "react";

function EyesOnMe(){
    function handleFocus(event){
        console.log("Good!",event.target.value)

    }
    function handleBlur(e){
        console.log("Hey! Eyes on me!",e.target.value)
    }
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )

}
export default EyesOnMe;