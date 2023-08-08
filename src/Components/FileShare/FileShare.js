import React from 'react';
import styles from './FileShare.module.css'
import Dummy from '../Dummy';

const FileShare = () => {
    return (
        <>
            <div className={`${styles[`flex-container`]}`}>
                <Dummy />

                <div className={`${styles.dummy}`}></div>
                <div>
                    <h1>FileShare</h1>
                </div>
            </div>
        </>
    )
}

export default FileShare;