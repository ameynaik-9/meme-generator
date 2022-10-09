import React from 'react'
import imgnav from '../images/imgnav.jpeg'
import '../index.css'

export default function Header(){
    const mystyle={
    display: "flex",
    alignItems: "center",
    height: "110px",
    background: "linear-gradient(90deg),#672280 1.18%,#A626D3 100%"
    }
    return(
        <div>
            <header style={mystyle}>
            <img src={imgnav}/>
            <h2 className=''>Meme Generator</h2>
            <h4 className=''>React Course - Project 3</h4>
            </header>
        </div>
    )
}