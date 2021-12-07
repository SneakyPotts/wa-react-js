import React, { useState, useRef } from "react";
import './App.scss';
import List from "./components/List";
import Button from "./components/UI/Button";

function App() {
  const [data, setData] = useState([])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlSubmit = ev => {
    ev.preventDefault();

    const obj = { title, description }
    setData(...data, obj)
    setTitle('');
    setDescription('');
  }

  return (
    <React.Fragment>

      <form onSabmit={handlSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter title"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />
        <input
          type="text"
          name="text" p
          placeholder="enter description"
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />
        <Button type="button" disabled />
      </form>

      <List data={data} />
    </React.Fragment>
  );
}

export default App;
