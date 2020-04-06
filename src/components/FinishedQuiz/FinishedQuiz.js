import React from 'react';
import classes from './FinishedQuiz.css'
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'failed' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ];

                    //debugger

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Пройти тест заново</Button>
                <Button type="success">Перейти в список тестов</Button>
            </div>
        </div>
    );

};

export default FinishedQuiz;