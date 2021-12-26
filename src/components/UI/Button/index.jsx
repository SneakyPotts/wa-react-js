import React from 'react';
import './style.scss';


const Button = ({children, ...props}) => {
    return (
        <button className='btn' {...props}>
            {children}
        </button>
    );
};

export default Button;