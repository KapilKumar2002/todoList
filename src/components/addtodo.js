import React, { useState } from 'react'

const AddTodo = (props) => {
    const [text,setText] = useState("");
    function handleTextChange(e){
      setText(e.target.value);
    }

  return (
    <div className='add-todo'>
      <input type="text" className='input-todo-text' onChange={handleTextChange} value={text} />
      <button type='submit' className='btn' onClick= {text.length > 5 ? ()=> {props.addData(text);setText("")} : null} >+</button>
    </div>
  )
}

export default AddTodo
