import React, {memo} from 'react';

const ToDos = memo(({addTodo, todos}) => {
    console.log('Todos child loading...');
    return (
        <div>
            {todos.map((todo, index) => <p key={index}>{todo}</p>)}
            <button onClick={addTodo}>add</button>
        </div>
    );
});

export default ToDos;