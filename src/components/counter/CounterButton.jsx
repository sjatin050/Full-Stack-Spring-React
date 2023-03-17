import { useState } from 'react'
import './Counter.css'
import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {    

    // add this manully instaed of .css file -> style = {buttonStyle}
    // const buttonStyle ={
    //     fontSize:"30px",
    //     backgroudColor : "#4360D3",
    //     width:"100px",
    //     margin:"10px",
    //     color:"white",
    //     padding : "15px",
    //     borderRadius:"30px"
    // };

    //[0, ƒ]
    //const [firstElt, secondElt] = array
    // count -> variable  , setCount -> function
    const [count, setCount] = useState(0)

    // passed directly into the onClick using Lambda function

    // function incrementCounterFunction() {
    //     //setCount(count + by)   // this increments the count
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction() {
    //     //setCount(count - by)   // this decrements the count
    //     decrementMethod(by)
    // }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" onClick={() => incrementMethod(by)} >+{by}</button>
                <button className="counterButton" onClick={() => decrementMethod(by)} >-{by}</button>

            </div>
        </div>
    )
}


// below will help us to set constraints on the value provided in by
// below we are saying ,, pass only number , other things will give error
CounterButton.propTypes = {
    by: PropTypes.number
}
// this is used to set default value of by , if we dont pass any value to by , while calling the function
CounterButton.defaultProps = {
    by: 1
}