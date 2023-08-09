import React from 'react';
import styles from './background2.module.css';

const Background2 = (props) => {
    return (
        <>
            <div className={`${styles.main}`}> 
            {props.children}
            </div>
        </>
    )
}

export default Background2;