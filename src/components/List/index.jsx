import React from "react";
import ListItem from "../ListItem";


const List = ({data, removeHandl}) => {


    return (
        <React.Fragment>
            <h2>Some title page</h2>
            <ul>
                {data.map((elem, index) => (
                    <ListItem
                        id={elem.id}
                        num={index + 1}
                        title={elem.title}
                        text={elem.text}
                        key={elem.id}
                        removeHandl={removeHandl}
                    />
                ))}
            </ul>
        </React.Fragment>
    )
}

export default List;