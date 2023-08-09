import Dummy from '../Dummy';
import styles from './OrderTracker.module.css';
import Background from '../background';
import Background2 from '../background2';
import TrackingContainer from '../TrackingContainer/TrackingContainner';

const OrderTracker = () => {
    return (
        <>
            <div className={`${styles[`flex-container`]}`}>
                <Dummy />

                <div className={styles.containers}>
                    <Background >
                        <div className={`${styles.hero}`}>
                            <header>
                                <h1>Order Tracker</h1>
                            </header>
                            <div>
                                <a href='#ordertrack'>
                                    <ion-icon name="caret-down-circle-outline"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </Background>
                    
                    <div id='ordertrack'>
                        <Background2>
                            <div className={styles.ordertracking}>
                                <div className={styles['tracking-details']}>
                                    <table>
                                        <tr>
                                            <th>Order Date</th>
                                            <th>Amount</th>
                                            <th>ID</th>
                                        </tr>
                                        <tr>
                                            <td>Tomorrow</td>
                                            <td>5000₹</td>
                                            <td>TF4567</td>
                                        </tr>
                                    </table>
                                </div>
                                <TrackingContainer />
                                {/* <div className={styles['action-buttons']}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor='vechicle1'>Hi</label>
                                </div> */}
                            </div>
                        </Background2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderTracker;