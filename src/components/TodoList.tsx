import React from 'react'
import { Actions, Todo } from '../model';
import SingleToDo from './SingleToDo';
import './style.css';

interface Props {
    todos: Todo[];
    dispatch: React.Dispatch<Actions>;
    // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, dispatch}: Props) => {
  return <div className='todos'>
    {todos.map(todo =>
        <SingleToDo 
            todo={todo}
            key={todo.id}
            todos={todos}
            dispatch={dispatch}
        />
    )}</div>
}

export default TodoList