import React from 'react'
import PropTypes from "prop-types";

const Bio = (props) => {
    console.log('props;',props)
    const styleObject = { color :"red" , textAlign:"center"};
    return (
        <div>
            <h3 style = {styleObject}>Hello world </h3>
             <h3> my name is {props.name} and i'm {props.age}. Let me introduce myself abit better , I am here to dominate the human race. WORLD DOMINATION is my mission </h3>
        </div>
    )
}

export default Bio


Bio.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
};