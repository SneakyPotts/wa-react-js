import React, {useEffect, useMemo, useState} from "react";
import './../../App.scss';
import List from "./../../components/List";
import Form from "./../../components/Form";
import Input from "./../../components/UI/Input";
import Modal from "./../../components/Modal";
import Button from "./../../components/UI/Button";
import Loader from "./../../components/UI/Loader";
import {useFetch} from "./../../hooks/useFetch";
import {getPageArray, getPageCount} from "./../../utils";
import classNames from "classnames";
import {PostService} from "../../API/PostService";

function Posts() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selected, setSelected] = useState('');
    const [filtered, setFilter] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    // const [pageCount, setPageCount] = useState(0);
    const [pages, setPages] = useState([]);

    const [fetching, isLoading, error] = useFetch(async () => {
        const response = await PostService.getPosts(limit, page);
        const posts = await response.json();
        const totalCount = response.headers.get('x-total-count');
        const pageCount = getPageCount(totalCount, limit);
        // setTotalCount(response.headers.get('x-total-count'));
        // setPageCount(getPageCount(totalCount, limit));
        setPages(getPageArray(pageCount));

        setData(posts);
    });

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

    const sortedPosts = useMemo(() => {
        if (selected) {
            return [...data.sort((a, b) => a[selected].localeCompare(b[selected]))];
        }
        return data;
    }, [selected, data]);

    const filteredAndSortedPosts = useMemo(() => {
        return sortedPosts.filter((el) => el.title.toLowerCase().includes(filtered.toLowerCase()))
    }, [filtered, sortedPosts]);

    const activeModal = (state) => {
        return () => setIsActive(state)
    }

    // const getPosts = async () => {
    //     const response = await PostService.getPosts();
    //     const posts = await response.json();
    //     setData(posts);
    // }

    useEffect(() => {
        // getPosts();
        fetching();
    }, [page]);

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
            <hr/>
            <Input
                type='text'
                name='filter'
                placeholder='filter'
                value={filtered}
                onChange={(ev) => setFilter(ev.target.value)}
            />
            <select value={selected} onChange={ev => setSelected(ev.target.value)}>
                <option disabled value=''>Sort by...</option>
                <option value={'title'}>Sort by title</option>
                <option value={'body'}>Sort by text</option>
            </select>
            {isLoading
                ? <div style={{textAlign: "center"}}>
                    <Loader/>
                </div>
                : data?.length
                    ? <List
                        data={filteredAndSortedPosts}
                        removeHandle={removeHandle}
                    />
                    : <h1 style={{textAlign: 'center'}}>List empty</h1>
            }
            <ul className='pagination'>
                {pages.map(el =>
                    <li
                        key={el}
                        className={classNames('pagination-item', {active: page === el})}
                        onClick={() => setPage(el)}
                    >{el}</li>
                )}
            </ul>
        </React.Fragment>
    );
}

export default Posts;
