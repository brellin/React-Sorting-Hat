import React from 'react';
import './questions.scss';

const Questions = props => {
    return (<h2 style={{ display: props.bool === true ? 'block' : 'none' }}>{props.question.output}</h2>)
}

export default Questions;