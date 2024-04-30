import React from 'react';
 import styles from './Button.module.css'

function Button({btnName}) {
  return (
     <button className={styles.btn}>{btnName}</button>
  )
}

export default Button