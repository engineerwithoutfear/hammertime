import React from 'react';

const Quiz = (props) => (
    <div className="questionContainer">
        <div className="question">Question: {props.question}
        </div>
        <div className="choices">

            <div data-letter="A" onClick={props.guess} className="option-a">{props.a}</div>
            <div data-letter="B" onClick={props.guess} className="option-b">{props.b}</div>
            <div data-letter="C" onClick={props.guess} className="option-c">{props.c}</div>
            <div data-letter="D" onClick={props.guess} className="option-d">{props.d}</div>
        </div>
        <div className="answer">{props.message}</div>
    </div>
)

export default Quiz
