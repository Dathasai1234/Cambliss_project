import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.css";

const Sidebar = () => {

    return (
        <div className={`${styles.sidebar}`}>
            <Link className= {styles.link}to="/">
                <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/progress-1467385-1243782.png?f=avif&w=256' alt='logo'/>
                <h1>inTracker</h1>
            </Link>
            <Link
                className={`${styles.link}`}
                to="/"
            >
                Home
            </Link>
            <Link
                className={`${styles.link}`}
                to="/fileShare"
            >
                File Sharing
            </Link>
            <Link
                className={`${styles.link}`}
                to="/ordertrack"
            >
                Order Tracker
            </Link>
        </div>
    );
}

export default Sidebar;