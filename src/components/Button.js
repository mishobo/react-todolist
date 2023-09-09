import React from 'react'
import styles from '../styles/modules/button.module.scss'
import { getClasses } from '../utils/getClasses'

const buttonType = {
    primary: 'primary',
    secondary: 'secondary'
} 

export default function Button({children, type ,variant, ...rest}) {
  return (
    <button 
    className={getClasses([
        styles.button, 
        styles[`button--${buttonType[variant]}`]])} 
        type={type === 'submit' ? 'submit' : 'button'}
        {...rest}
        >
        {children}
    </button>
  )
}


export function SelectButton({children, ...rest}) {
  return (
    <select 
    className={
        getClasses([
            styles.button, 
            styles.button__select
        ])} 
    {...rest}
    >{children}</select>
  )
}

