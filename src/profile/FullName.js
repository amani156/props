import React from 'react'
import PropTypes from "prop-types";

const FullName = (props) => {
    FullName.defaultProps ={
        name:" stewie Griffin"
    }
    
    console.log('props:',props)
    const styleObject = { color :"red" , textAlign:"center"};
    return (
        <div>
            <h1 style = {styleObject}>{props.name}</h1>
            {props.children}

        </div>
    )
}

export default FullName

FullName.propTypes ={
    name : PropTypes.string,
};