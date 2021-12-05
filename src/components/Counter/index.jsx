import React from "react";
import {useState} from "react";
import style from './style.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const countValue = 3;

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    let incrementBy = (num) => {
        setCount(count + num);
    }

    return (
        <React.Fragment>
            <h2 className={style.title}>{count}</h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementBy(countValue)}>Increment by {countValue}</button>
        </React.Fragment>
    )
}

export default Counter;