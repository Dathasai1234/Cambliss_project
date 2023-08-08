import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar}`}>
            <ul>
                <li><Link className={`${styles.links}`} to="/fileShare">File Sharing</Link></li>
                <li><Link className={`${styles.links}`} to="/ordertrack">Order Tracker</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;