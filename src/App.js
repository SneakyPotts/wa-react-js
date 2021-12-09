import React, {useState} from "react";
import './App.scss';
import List from "./components/List";
import Form from "./components/Form";

function App() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selected, setSelected] = useState('');

    const handlSubmit = ev => {
        ev.preventDefault();

        const obj = {title, description}
        setData(...data, obj);
        setTitle('');
        setDescription('');
    }

    const removeHandl = (id) => {
        setData(data.filter(i => i.id !== id))
    }

    const selectData = (ev) => {
      setSelected(ev.target.value);
      setData([...data.sort((a,b) => a[selected].localeCompare(b[selected]))]);
    }

    return (
        <React.Fragment>

            <Form
                handlSubmit={handlSubmit}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
            />
            <hr/>

          <select value={selected} onChange={selectData}>
            <option value={title}>По названию</option>
            <option value={description}>По описанию</option>
          </select>

            {data?.length
                ? <List data={data} removeHandl={removeHandl}/>
                : <h1>Список пустой</h1>
            }
        </React.Fragment>
    );
}

export default App;
