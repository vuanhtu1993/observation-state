import React, {Component} from 'react';
import TodoList from "./components/todo";
import Review from "./components/reviewTodoList";

class App extends Component {
  render() {
    return (
      <div>
        Actually understanding pub sub pattern
        <TodoList/>
        <Review/>
      </div>
    );
  }
}

export default App;
