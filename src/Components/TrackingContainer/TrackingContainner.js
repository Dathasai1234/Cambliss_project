import { useState } from "react";
import BasicProgress from "../Progressbar/BasicProgress";
import styles from './TrackingContainer.module.css';

function TrackingContainer() {

    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
    };

    const decreaseProgress = () => {
        if (progress > 0) {
            setProgress(progress - 5);
        }
    };


    return <>
        <div className={styles['tracking-container']}>
            <h1><strong>Project Name</strong>: Lorem epsum</h1>
            <div className={styles.z1}>
                <label>Order Placed</label>
                <label></label>
                <label>UI/UX</label>
                <label></label>
                <label>Testing</label>
                <label></label>
            </div>
            <BasicProgress  progress={progress}/>
            <div className={styles.z2}>
                <label></label>
                <label>In Production</label>
                <label></label>
                <label>Backend</label>
                <label></label>
                <label>Completed</label>
            </div>
            <div className={styles.actions}>
                <label className={styles.label1} onClick={increaseProgress}>Increase Progress</label>
                <label className={styles.label2} onClick={decreaseProgress}>Decrease Progress</label>
                {/* <button>-</button>
                <button onClick={increaseProgress}>+</button> */}
            </div>
        </div>
    </>
}

export default TrackingContainer;