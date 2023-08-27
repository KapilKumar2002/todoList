import React from 'react'

const TodoList = (props) => {
    
  return (
    <ul className='todo-list'>
        <li className='list' id={props.id} key={props.id} onClick={()=>props.delete(props.id)}>{props.data}</li>
    </ul>
  )
}

export default TodoList
