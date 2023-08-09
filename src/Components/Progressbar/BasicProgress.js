
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export function BasicProgress() {
    return <>
        <ProgressBar
            width={900}
            height={8}
            // change Proress here
            percent={59}
            // 6 - Order Placed
            // 24 - UI/UX
            // 41 - Testing
            // 59 - In Production
            // 76.5 - Backend
            // 94.5 - Completed
            fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            stepPositions = {[6, 24, 41, 59, 76.5, 94.5]}
        >

            <Step transition="scale">
                {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt="tick"
                />
                )}
            </Step>

            <Step transition="scale">
            {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt='tick'
                />
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt='tick'
                />
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt='tick'
                />
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt='tick'
                />
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished }) => (
                <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://toppng.com/uploads/preview/check-mark-html-done-icon-11563029359rpmvepeinu.png"
                alt='tick'
                />
            )}
            </Step>
        </ProgressBar>
    </>
}

export default BasicProgress;