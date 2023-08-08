import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Dummy from "../Dummy";

const Home = () => {
    return (
        <div className={`${styles['flex-container']}`}>
            <Dummy />
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to='/fileshare'>File</Link></li>
                    <li><Link to='/ordertrack'>Object Tracking</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;