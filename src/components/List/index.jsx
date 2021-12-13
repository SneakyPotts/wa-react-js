import React from 'react';
import './style.scss';
import ListItem from "../ListItem";

const List = ({pageTitle, data}) => {
    return (
        <React.Fragment>
            <h2>{pageTitle}</h2>
            <ul>
                {data.map((el, i) => (
                    <ListItem num={i +1} title={el.title} text={el.text} key={el.id} />
                ))}

            </ul>
        </React.Fragment>
    );
};

export default List;