import React from 'react';
import classes from './ActiveQuize.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuize = props => {
    return (
    <div className={classes.ActiveQuize}>
        <div className={classes.ActiveQuize_Counter}>{props.answerNumber} из {props.quizeLength}</div>
        <h2>
    {props.answerNumber}. {props.question}
        </h2>
        
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick = {props.onAnswerClick}
        />
    </div>
)}

export default ActiveQuize;