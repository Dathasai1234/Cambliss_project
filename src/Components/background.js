import React from 'react';
import styles from './background.module.css';

const Background = (props) => {
    return (
        <>
            <div className={`${styles.main}`}> {props.children}
            </div>
        </>
    )
}

export default Background;