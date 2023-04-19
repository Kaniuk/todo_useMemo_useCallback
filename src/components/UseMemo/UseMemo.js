import React, {useMemo, useState} from 'react';

const summator = (n) => {
    console.log('start');
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += n;
    }
    console.log('finish');
    return sum;
};
const UseMemo = () => {
    const [n, setN] = useState(5);
    const [counter, setCounter] = useState(0);

    // let number = summator(n);
    // start summator when n is changing
    const number = useMemo(() => summator(n), [n]);
    return (
        <div>
            <h1>sum:{number}</h1>
            <h1>counter:{counter}</h1>
            <div>
                <button onClick={() => setN(prev => prev + 1)}>incN</button>
                <button onClick={() => setN(prev => prev - 1)}>decN</button>
            </div>
            <div>
                <button onClick={() => setCounter(prev => prev + 1)}>incCount</button>
                <button onClick={() => setCounter(prev => prev - 1)}>decCount</button>
            </div>
        </div>
    );
};

export {UseMemo};