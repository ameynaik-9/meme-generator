// import logo from './logo.svg';
// // import './App.css';
// import Header from './Components/Header';
// import './index.css'
// import Meme from './Components/Meme';
// import { useState } from 'react';
// import boxes from './boxes';
// import Box from './Components/Box';
// import Joke from './Components/Joke';
// import Form from './Components/Form';

// export default function App() {
//   const [formData, setFormData] = useState({
//       email: "",
//       password: "",
//       passwordConfirm: "",
//       joinedNewsletter: true
//   })
//   function handleChange(event) {
//       const {name, value, type, checked} = event.target
//       setFormData(prevFormData => ({
//           ...prevFormData,
//           [name]: type === "checkbox" ? checked : value
//       }))
//   }
  
//   function handleSubmit(event) {
//       event.preventDefault()
//       formData.password===formData.passwordConfirm?console.log("Successfully Signed Up!!"):console.log("Passwords didn't match")
//       (formData.joinedNewsletter&&console.log("Thanks for joining news letter"))
//   }
  
//   return (
//       <div className="form-container">
//           <form className="form" onSubmit={handleSubmit}>
//               <input 
//                   type="email" 
//                   placeholder="Email address"
//                   className="form--input"
//                   name="email"
//                   onChange={handleChange}
//                   value={formData.email}
//               />
//               <input 
//                   type="password" 
//                   placeholder="Password"
//                   className="form--input"
//                   name="password"
//                   onChange={handleChange}
//                   value={formData.password}
//               />
//               <input 
//                   type="password" 
//                   placeholder="Confirm password"
//                   className="form--input"
//                   name="passwordConfirm"
//                   onChange={handleChange}
//                   value={formData.passwordConfirm}
//               />
              
//               <div className="form--marketing">
//                   <input
//                       id="okayToEmail"
//                       type="checkbox"
//                       name="joinedNewsletter"
//                       onChange={handleChange}
//                       checked={formData.joinedNewsletter}
//                   />
//                   <label htmlFor="okayToEmail">I want to join the newsletter</label>
//               </div>
//               <button 
//                   className="form--submit"
//               >
//                   Sign up
//               </button>
//           </form>
//       </div>
//   )
// }



import React from "react"
import Header from "./Components/Header.js"
import Meme from "./Components/Meme.js"
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}


// import React, { useEffect, useState } from 'react'

// export default function App(){
//   const [starWarsData,setStarWarsData] = useState({})
//   const [count,setCount] = useState(1);

//   console.log("Compo rend")
  
//   useEffect(()=>{
//     console.log("Effect Ran")
//     fetch(`https://swapi.dev/api/people/${count}`)
//     .then(res => res.json())
//     .then(data => setStarWarsData(data))
//   },[count])

//   return(
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={()=>setCount(prevCount=>prevCount+1)}>Get Next Character</button>
//       <pre>{JSON.stringify(starWarsData,null,2)}</pre>
//     </div>
//   )
// }