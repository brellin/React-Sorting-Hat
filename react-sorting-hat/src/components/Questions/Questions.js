import React from 'react';
import './questions.scss';
import Answers from '../Answers/Answers';

const Questions = props => {
    return (
        <div
            className='questions'
            style={{ display: props.hat === true ? 'flex' : 'none' }}
        >
            <h2 style={{ display: props.bool === true ? 'flex' : 'none' }}>
                {props.question.output}
            </h2>
            <Answers bool={props.bool} question={props.question} submitAnswer={props.submitAnswer} />
        </div>
    )
}

export default Questions;