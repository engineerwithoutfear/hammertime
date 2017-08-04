import React from 'react';

const Settings = (props) => (

    <div >
        <h1>Settings</h1>
        <div >Question Progression:
            <div onClick={props.toggleMode}>
                <div
                    className={props.mode === "orderly"
                    ? "activeSetting"
                    : ""}>In Order</div>

                <div
                    className={props.mode === "random"
                    ? "activeSetting"
                    : ""}>Random</div>
            </div>
        </div>
        <div>Exam:
            <div
                data-exam="technician"
                onClick={props.toggleExam}
                className={props.exam === "technician"
                ? "activeSetting"
                : ""}>Technician</div>
            <div
                data-exam="general"
                onClick={props.toggleExam}
                className={props.exam === "general"
                ? "activeSetting"
                : ""}>General</div>
            <div
                data-exam="extra"
                onClick={props.toggleExam}
                className={props.exam === "extra"
                ? "activeSetting"
                : ""}>Extra</div>
        </div>
        <div>Progress Indicator:
            <div
                onClick={props.toggleDisplayProgressIndicator}
                className={props.displayProgressIndicator === true
                ? "activeSetting"
                : ""}>On</div>
            <div
                onClick={props.toggleDisplayProgressIndicator}
                className={props.displayProgressIndicator === false
                ? "activeSetting"
                : ""}>Off</div>
        </div>
    </div>
)

export default Settings