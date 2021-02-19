import React from 'react'



const HandleName = () => {
     function HandleClick(e) {
         e.preventDefault();
         alert ("username");
         
     }




    return (
        <div>
            <a href="/" onClick={HandleClick}>
            click me 
            </a>
        </div>
    )
}

export default HandleName


