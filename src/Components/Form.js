import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor:""
        }
    )
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    const myStyle = {
        marginBottom: "15px",
        height: "30px",
        textIndent: "10px",
        border: "1px solid #444",
        borderRadius: "5px",
        display: "block"
    }
    return (
        <form onSubmit={handleSubmit} >
            <input
                style={myStyle}
                type="text"
                placeholder='First Name'
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                style={myStyle}
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                style={myStyle}
                type="email"
                placeholder='Email'
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                style={myStyle}
                onChange={handleChange}
                value={formData.comments}
                placeholder='Comments'
            />
            <input
                type="checkbox"
                id='isFriendly'
                checked={formData.isFriendly}
                onChange={handleChange}
                name='isFriendly'
            />
            <label htmlFor='isFriendly'>Are you Friendly</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name='employment'
                    value='unemployed'
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name='employment'
                    value='part-time'
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name='employment'
                    value='full-time'
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>
            <br />
            <select 
            id='favColor'
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            {/* type of button is by default submit */}
            <button>Submit</button>
        </form>
    )

}