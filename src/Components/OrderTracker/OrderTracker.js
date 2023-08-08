import React from 'react';
import Dummy from '../Dummy';
import styles from './OrderTracker.module.css';

const OrderTracker = () => {
    return (
        <>
            <div className={`${styles[`flex-container`]}`}>
                <Dummy />

                <div className={`${styles.dummy}`}></div>
                <div>
                    <h1>Order Tracker</h1>
                </div>
            </div>
        </>
    )
}

export default OrderTracker;