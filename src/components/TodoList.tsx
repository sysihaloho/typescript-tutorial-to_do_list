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
  return (
    <div className="container">
        <div className='todos'>
        <span className="todos__heading">
            Active Tasks
        </span>
            { todos.map(todo => <SingleToDo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    dispatch={dispatch}/>)
            }
        </div>
        <div className="todos remove">  
            <span className="todos__heading">
                Completed Tasks
            </span>
            { todos.map(todo =>
                <SingleToDo 
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    dispatch={dispatch}/>
                )
            }
        </div>
    </div>
    )}

export default TodoList