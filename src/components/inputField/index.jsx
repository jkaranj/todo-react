import React from 'react'
import { useState } from 'react'

function InputField({addCategory}) {


    const [input, setInput] = useState()


    const changeHandler = e => {
        setInput(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        addCategory(input)
    }

    return (
        <div>
            <form  onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler} value={input}/>
                <button type="submit">+</button>
            </form>
           
        </div>
    )
}

export default InputField
