import React from "react";
import './style.scss'
import Button from "../UI/Button";

const ListItem = ({id, num, title, text, removeHandl}) => {

    return (
        <li className="list-item">
          <span className="list-item-wrapper">
            <span>{num}. {title}</span>
            <span>{text}</span>
          </span>
            <Button onClick={() => removeHandl(id)}>Remove</Button>
        </li>

    )
}

export default ListItem;