import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.css";

const Sidebar = () => {

    return (
        <div className={`${styles.sidebar}`}>
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