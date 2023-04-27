import React, {useCallback, useState} from 'react';

import './Main.css';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [counter, setCounter] = useState(0);

    const inc = () => setCounter(prev => prev + 1);

    const addTodos = () => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            value: todo
        };

        setTodos([...todos, newTodo]);
        setTodo('');
    };

    function deleteTodo(id) {
        const newArrTodos = todos.filter(removeTodo => removeTodo.id !== id);
        setTodos(newArrTodos);
    }

    return (
        <div className="todoList">
            <h1>TODO List</h1>
            <input type="text"
                   placeholder="add something"
                   value={todo}
                   onChange={e => setTodo(e.target.value)}/>
            <button onClick={() => addTodos()}>add</button>

            <div>
                {todos?.map((todo) => <div key={todo.id} className="list">
                    <div>{todo.value}</div>
                    <button onClick={() => deleteTodo(todo.id)}>❌</button>
                </div>)}
            </div>
            <hr/>
            <h1>count:{counter}</h1>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export default Main;