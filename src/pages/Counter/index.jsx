import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCountDecr, changeCountInc, incCountFor} from "../../store/actions/counter";
import {fetchWeatherInfo} from "../../fetches";

const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.test);
  const {data} = useSelector(state => state.weather);
  const main = data?.main || 'test';
  console.log(main)

  const [incCount, setIncCount] = useState(1);
  const [cityName, setCityName] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    dispatch(fetchWeatherInfo(cityName));
  }

  return (
    <>
    <button onClick={() => dispatch(changeCountInc())}>+</button>
      <span>{count}</span>
    <button onClick={() => dispatch(changeCountDecr())}>-</button>

      <input type='text' value={incCount} onChange={ev => setIncCount(ev.target.value)} />
      <button onClick={() => dispatch(incCountFor(incCount))}>Увеличить на...</button>

      <div className="weather-info">
        <form onSubmit={submitForm}>
          <input type="text" value={cityName} onChange={(ev) => setCityName(ev.target.value)}/>
        </form>
        <p>{main?.temp}</p>
      </div>
    </>
  );
};

export default Counter;