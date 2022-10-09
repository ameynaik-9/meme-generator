import React, { useState } from 'react'


export default function Box(props) {
    const myStyle = {
        height: "100px",
        width: "100px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "2px",
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div 
        className='box' 
        onClick={() => props.toggle(props.id)} 
        style={myStyle}>
        </div>
    )
}