import React from 'react';
import './style.scss';
import Button from "../UI/Button";

const ListItem = ({id, num, title, text, removeHandle}) => {

    return (
        <React.Fragment>
            <li className="list-item">
                    <span className="list-item__wrapper">
                        <span>{num}. {title}</span>
                        <span>{text}</span>
                    </span>
                <Button onClick={removeHandle(id)}>remove</Button>
            </li>
        </React.Fragment>
    );
};

export default ListItem;