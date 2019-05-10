import React, {useState} from 'react'
import todoStore from "../stores/todoStore";

const TodoList = ({data}) => {
  const [todo, setTodo] = useState("");
  let {todos} = data;

  const addTodo = () => {
    todoStore.setData({todos: [...todos, todo]})
  };
  return (
    <div>
      <h5>Todo List</h5>
      <ul>
        {todos && todos.map((item) => <li key={item}>{item}</li>)}
      </ul>
      Add todos
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
  )
};

export default todoStore.connect(TodoList);
