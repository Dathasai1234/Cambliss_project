import React from 'react';
import styles from './FileShare.module.css'
import Dummy from '../Dummy';
import Background from '../background';
import Background2 from '../background2';
import Form from './Form';

const FileShare = () => {
    return (
        <>
            <div className={`${styles[`flex-container`]}`}>
                <Dummy />

                <div className={styles.containers}>
                    <Background >
                            <div className={`${styles.hero}`}>
                                <header>
                                    <h1>File Sharing</h1>
                                </header>
                                <div>
                                    <a href='#fileshare'>
                                    <ion-icon name="caret-down-circle-outline"></ion-icon>
                                    </a>
                                </div>
                            </div>
                    </Background>

                    <div id='fileshare'>
                        <Background2>
                            <Form />
                        </Background2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileShare;