import React, {useState} from "react";
import './App.scss';
import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/UI/Input";
import Modal from "./components/Modal";
import Button from "./components/UI/Button";
import {PostService} from "./API/PostService";

function App() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selected, setSelected] = useState('title');
    const [filtered, setFilter] = useState('');
    const [isActive, setIsActive] = useState(false);


    let handleSubmit = (ev) => {
        ev.preventDefault();
        let obj = {id: Date.now(), title, text}

        setData([...data, obj]);
        setTitle('');
        setText('');
        setIsActive(false)
    }

    let removeHandle = (id) => {
        return () => {
            setData(data.filter(el => el.id !== id))
        }
    }

    const selectData = () => {
        return [...data.sort((a, b) => a[selected].localeCompare(b[selected]))];
    }

    const sortedPosts = selectData();
    // const filteredAndSortedPosts = sortedPosts.filter((el) => el.title === filtered);

    const activeModal = (state) => {
        return () => setIsActive(state)
    }

    const getPosts = async () => {
      const posts = await PostService.getPosts();
        console.log('obj', posts)
    }
    
    return (
        <React.Fragment>
            <Button onClick={activeModal(true)}>Add posts</Button>
            <Modal
                isActive={isActive}
                setIsActive={activeModal}
            >
                <Form
                    handleSubmit={handleSubmit}
                    setTitle={setTitle}
                    title={title}
                    setText={setText}
                    text={text}
                />
            </Modal>
            <hr />
            <Input
                type='text'
                name='filter'
                placeholder='filter'
                value={filtered}
                onChange={(ev) => setFilter(ev.target.value)}
            />
            <select value={selected} onChange={selectData}>
                <option value={'title'}>Sort by title</option>
                <option value={'text'}>Sort by text</option>
            </select>
            {data?.length
                ? <List
                    data={sortedPosts}
                    removeHandle={removeHandle}
                />
                : <h1 style={{textAlign:'center'}}>List empty</h1>
            }
            <Button
                onClick={getPosts}
            >Add posts</Button>
        </React.Fragment>
    );
}

export default App;
