import React from 'react';
import './style.scss';
import ListItem from "../ListItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const List = ({data, removeHandle}) => {

    return (
        <React.Fragment>
            <ul>
                <TransitionGroup className="todo-list">
                    {data.map((el, i) => (
                        <CSSTransition
                            key={el.id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListItem
                                id={el.id}
                                num={i + 1}
                                title={el.title}
                                body={el.body}
                                removeHandle={removeHandle}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </React.Fragment>
    );
};

export default List;