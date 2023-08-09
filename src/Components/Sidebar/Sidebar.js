import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(getSelectedLinkFromPath(location.pathname));

    const handleLinkClick = (index) => {
        setSelectedLink(index);
    };

    return (
        <div className={`${styles.sidebar}`}>
            <Link
                className={`${styles.link} ${selectedLink === 0 ? styles.active : ''}`}
                to="/"
                onClick={() => handleLinkClick(0)}
            >
                Home
            </Link>
            <Link
                className={`${styles.link} ${selectedLink === 1 ? styles.active : ''}`}
                to="/fileShare"
                onClick={() => handleLinkClick(1)}
            >
                File Sharing
            </Link>
            <Link
                className={`${styles.link} ${selectedLink === 2 ? styles.active : ''}`}
                to="/ordertrack"
                onClick={() => handleLinkClick(2)}
            >
                Order Tracker
            </Link>
        </div>
    );
}

function getSelectedLinkFromPath(pathname) {
    if (pathname === '/') {
        return 0;
    } else if (pathname === '/fileShare') {
        return 1;
    } else if (pathname === '/ordertrack') {
        return 2;
    }
    return null;
}

export default Sidebar;