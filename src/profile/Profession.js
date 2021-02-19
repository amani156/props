import React from 'react'
import PropTypes from "prop-types";

const Profession = (props) => {
    Profession.defaultProps ={
        job:"world class scientist" ,
        hobby:"time travel"
    }
    console.log('props:',props)
    return (
        <div>
            <p style = {{padding:"50px", color:"blue"}}> my ofiicial title is {props.job} and i am a master of {props.hobby}. VICTORY SHALL BE MINE </p>
        
        </div>
    )
}

export default Profession


Profession.propTypes = {
    job : PropTypes.string,
    hobby : PropTypes.string,
};