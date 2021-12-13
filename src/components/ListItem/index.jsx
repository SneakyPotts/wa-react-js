import React from 'react';
import './style.scss';

const ListItem = ({num, title, text}) => {

    return (
        <React.Fragment>
            <li className="list-item">
                    <span className="list-item__wrapper">
                        <span>{num}. {title}</span>
                        <span>{text}</span>
                    </span>
            </li>
        </React.Fragment>
    );
};

export default ListItem;