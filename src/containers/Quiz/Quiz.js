import React, {Component} from 'react';
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        results: {}, // {[id]: success/failed}
        quiz: [
            {
                id: 1,
                question: 'Вопрос 1',
                correctAnswer: 2,
                answers: [
                    {id: 1, text: 'Ответ 1'},
                    {id: 2, text: 'Ответ 2'},
                    {id: 3, text: 'Ответ 3'},
                    {id: 4, text: 'Ответ 4'}
                ]
            },
            {
                id: 2,
                question: 'Вопрос 2',
                correctAnswer: 4,
                answers: [
                    {id: 1, text: 'Ответ 1'},
                    {id: 2, text: 'Ответ 2'},
                    {id: 3, text: 'Ответ 3'},
                    {id: 4, text: 'Ответ 4'}
                ]
            }
        ]
    };

    onRetryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    };

    onAnswerClickHandler = (answerId) => {

        // Блокировка многократного нажатия на один и тот же элемент
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.correctAnswer === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {
                    [answerId]: 'success',
                    results
                }
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            results[question.id] = 'failed';
            this.setState({
                answerState: {
                    [answerId]: 'failed',
                    results
                }
            });
            const timeout = window.setTimeout(() => {

                this.setState({
                    answerState: null
                });

                window.clearTimeout(timeout);
            }, 1000)
        }

    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Вопрос</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz results={this.state.results}
                                          quiz={this.state.quiz}
                                          onRetry={this.onRetryHandler}/> :
                            <ActiveQuiz question={this.state.quiz[this.state.activeQuestion].question}
                                        answers={this.state.quiz[this.state.activeQuestion].answers}
                                        quizLength={this.state.quiz.length}
                                        answerNumber={this.state.activeQuestion + 1}
                                        state={this.state.answerState}
                                        onAnswerClick={this.onAnswerClickHandler}/>
                    }
                </div>
            </div>
        )
    }
}

export default Quiz