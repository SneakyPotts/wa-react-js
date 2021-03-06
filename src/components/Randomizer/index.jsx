import React, {useState} from "react";
import style from './style.module.scss';

const Randomizer = () => {
    let [minValue, setMin] = useState(0);
    let [maxValue, setMax] = useState(100);
    let [randomValue, setRandom] = useState();

    const randomize = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        min < max
            ? setRandom(randomValue = 'Random number: ' + (Math.floor(Math.random() * (max - min + 1)) + min))
            : setRandom(randomValue = 'Minimum or Maximum incorrect! Try again.');
    }

    return (
        <div className={style.main}>

            <input
                className={style.result}
                value={randomValue}
                type="text"
                placeholder={'Random number result'}/>

            <input
                className={style.minimum}
                onChange={event => setMin(event.target.value)}
                type="text"
                placeholder={'Minimum: ' + minValue} />

            <input
                className={style.maximum}
                onChange={event => setMax(event.target.value)}
                type="text"
                placeholder={'Maximum: ' + maxValue} />

            <button className={style.random} onClick={() => randomize(minValue, maxValue)}>Get random number</button>
        </div>
    )
}

export default Randomizer;