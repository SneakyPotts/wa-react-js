import React from 'react'

import style from './styles.scss'
import Input from "../UI/Input";
import Button from "../UI/Button";

const Form = ({ handlSubmit, title, setTitle, description, setDescription }) => {
    return (
        <form onSabmit={handlSubmit}>
            <Input
                name="title"
                placeholder="enter title"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <Input
                name="description"
                placeholder="enter description"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
            />
            <Button type="button" disabled>Click me</Button>
        </form>
    )
}


export default Form
