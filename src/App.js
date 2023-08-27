import React,{useState} from "react";
import AddTodo from "./components/addtodo";
import TodoList from "./components/list";

function App() {

  const [todoList,setTodoList] = useState([]);
  function handleAddTodo(text){
    setTodoList(()=>([...todoList,text]));
  }
  function deleteTodo(id){
    setTodoList(prevData => prevData.filter((item,index)=> index !== id));
  }
  return (
    <div className="container">
      <AddTodo  addData={handleAddTodo}/>
      <div className="todo-list-container">
      <h1>Todos</h1>
      <hr />
      {todoList.map((item,index)=> (<TodoList id={index} key={index} data = {item} delete={deleteTodo}/>))}
      </div>
    </div>

  );
}

export default App;
