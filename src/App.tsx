import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo, TodoReducer } from "./model";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(TodoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      // setTodos([...todos, { id: Date.now(), todo:todo, isDone: false}]);
      dispatch({type: "add", payload: todo});    
      setTodo("");
    }    
  };
  
  return <div className='App'>
    <span className='heading'>Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={state} dispatch={dispatch} />
  </div>
}
export default App;
