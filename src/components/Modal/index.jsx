import React from 'react';
import style from './style.module.scss';
import classNames from "classnames";

const Modal = (props) => {
    return (
        <div
            className={
                classNames(
                    style.modalWrapper,
                    {[style.active] : props.isActive}
                )
            }
            onClick={props.setIsActive(false)}
        >
            <div
                className={style.modalBlock}
                onClick={(event => event.stopPropagation())}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Modal;