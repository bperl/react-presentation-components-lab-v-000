// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = props => {
    
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div onClick={handleClick}>I am just happy</div>
    )
}

export default  SimplerComponent;