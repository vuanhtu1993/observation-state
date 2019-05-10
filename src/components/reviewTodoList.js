import React from 'react'
import todoStore from "../stores/todoStore";

const Review = ({data}) => {
  let {todos} = data;
  return (
    <div>
      Review Todo list
      <ul>
        {todos && todos.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
};

export default todoStore.connect(Review);
