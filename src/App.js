import React from "react";
import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";
import Randomizer from "./components/Randomizer";

function App() {
    const [text, setText] = useState('start point');

    return (
        <React.Fragment>
            {/*<Counter/>*/}

            {/*<h2>{text}</h2>*/}
            {/*<input type="text" value={text} onChange={event => setText(event.target.value)}/>*/}

            <Randomizer />
        </React.Fragment>
    );
}

export default App;
