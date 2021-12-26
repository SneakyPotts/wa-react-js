import React from 'react';
import './style.scss';
import Input from "../UI/Input";
import Button from "../UI/Button";

const Form = ({handleSubmit, setTitle, title, setText, text}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="title"
                placeholder="enter title"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <Input
                name="text"
                placeholder="enter text"
                value={text}
                onChange={ev => setText(ev.target.value)}
            />
            <Button type='submit'>Add item</Button>
        </form>
    );
};

export default Form;