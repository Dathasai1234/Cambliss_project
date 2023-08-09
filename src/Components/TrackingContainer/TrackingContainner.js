import BasicProgress from "../Progressbar/BasicProgress";
import styles from './TrackingContainer.module.css';

function TrackingContainer() {
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
            <BasicProgress />
            <div className={styles.z2}>
                <label></label>
                <label>In Production</label>
                <label></label>
                <label>Backend</label>
                <label></label>
                <label>Completed</label>
            </div>
        </div>
    </>
}

export default TrackingContainer;