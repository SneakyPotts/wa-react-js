import React from "react";
import './style.scss'

const ListItem = ({num, title, text}) => {

    return (
        <li className="list-item">
          <span className="list-item-wrapper">
            <span>{num}. {title}</span>
            <span>{text}</span>
          </span>
        </li>

    )
}

export default ListItem;