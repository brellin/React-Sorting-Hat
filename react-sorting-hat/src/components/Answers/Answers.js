import React from 'react';
import './answers.scss';

const Answers = props => {
    return (
        <ul style={{ display: props.bool === true ? 'flex' : 'none' }}>
            <li
                className='answer'
                onClick={() => props.submitAnswer(props.question.id, 1)}
            >
                {props.question.answers.answerOne}
            </li>
            <li
                className='answer'
                onClick={() => props.submitAnswer(props.question.id, 2)}
            >
                {props.question.answers.answerTwo}
            </li>
            <li
                className='answer'
                onClick={() => props.submitAnswer(props.question.id, 3)}
            >
                {props.question.answers.answerThree}
            </li>
            <li
                className='answer'
                onClick={() => props.submitAnswer(props.question.id, 4)}
            >
                {props.question.answers.answerFour}
            </li>
        </ul>
    )
}

export default Answers;