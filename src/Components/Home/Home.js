import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Dummy from "../Dummy";
import Background from "../background";

const Home = () => {
    return (
        <div className={`${styles['flex-container']}`}>
            <Dummy />

            <div className={styles.containers}>
                <Background>
                    <div className={`${styles.hero}`}>
                        <header>
                            <h1>Home</h1>
                            <ul>
                                <li><Link to='/fileshare'>File</Link></li>
                                <li><Link to='/ordertrack'>Object Tracking</Link></li>
                            </ul>
                        </header>
                    </div>
                </Background>
            </div>
        </div>
    );
}

export default Home;