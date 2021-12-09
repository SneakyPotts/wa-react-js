import React from 'react'
import style from './styles.scss'

const Button = ({children, ...props}) => {
    return (
        <button className='btn' {...props}>
            { children }
        </button>
    )
}


export default Button
