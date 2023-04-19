import React, {useCallback, useState} from 'react';
import ToDos from "./ToDos";

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [counter, setCounter] = useState(0);

    const inc = () => setCounter(prev => prev + 1);
    // const addTodo = () => setTodos([...todos, 'New todo']);

    const addTodo = useCallback(() => {
        setTodos([...todos, 'New todo']);
    }, [todos]);

    return (
        <div>
            <ToDos todos={todos} addTodo={addTodo}/>
            <hr/>
            <h1>count:{counter}</h1>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export default Main;