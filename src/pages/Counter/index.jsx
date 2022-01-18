import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCountDecr, changeCountInc, incCountFor} from "../../store/actions/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.test);

  const [incCount, setIncCount] = useState(1);

  return (
    <>
    <button onClick={() => dispatch(changeCountInc())}>+</button>
      <span>{count}</span>
    <button onClick={() => dispatch(changeCountDecr())}>-</button>

      <input type='text' value={incCount} onChange={ev => setIncCount(ev.target.value)} />
      <button onClick={() => dispatch(incCountFor(incCount))}>Увеличить на...</button>
    </>
  );
};

export default Counter;