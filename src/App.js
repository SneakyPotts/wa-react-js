import React, {useState} from "react";
import './App.scss';
import List from "./components/List";
import Button from "./components/UI/Button";

function App() {
    const [data, setData] = useState([]);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    let handleSubmit = (ev) => {
        ev.preventDefault();
        let obj = { id: Date.now(), title, text }

        setData([...data,obj]);
        setTitle('');
        setText('');
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="enter title"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <input
                    name="text"
                    placeholder="enter text"
                    value={text}
                    onChange={ev => setText(ev.target.value)}
                />
                <Button>Add item</Button>
            </form>

            <List pageTitle={'HTML posts'} data={data} />
        </React.Fragment>
    );
}

export default App;
