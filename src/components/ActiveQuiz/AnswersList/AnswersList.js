import React from 'react';
import Answer from "./Answer/Answer";
import classes from './AnswersList.css'

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <Answer key={index}
                            answer={answer}
                            state={props.state ? props.state[answer.id] : null}
                            onAnswerClick={props.onAnswerClick}/>
                )
            })}
        </ul>
    );
};

export default AnswersList;