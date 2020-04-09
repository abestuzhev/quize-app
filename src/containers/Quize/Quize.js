import React, {Component} from 'react';
import classes from './Quize.css';
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'
import FinishedQuize from '../../components/FinishedQuize/FinishedQuize'

class Quize extends Component {

    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null, //{[id]: 'success' 'error'}
        quize: [
            {
                question: 'Сколько звезд на небе?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: '10 млн', id: 1},
                    {text: '50 млн', id: 2},
                    {text: '100 млн', id: 3},
                    {text: 'никто не считал', id: 4}
                ]
            },
            {
                question: 'Сколько песчинок в 1кг песка?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: '1 млн', id: 1},
                    {text: '5 млн', id: 2},
                    {text: '10 млн', id: 3},
                    {text: 'никто не считал', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId)=> {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            console.log('key', key)
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quize[this.state.activeQuestion];
        if(question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            });
            const timeout = window.setTimeout(()=> {
                if(this.isQuizeFinished()){
                    this.setState({
                        isFinished: true
                    });
                }else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
           
        }else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
         
        
    }

    isQuizeFinished() {
      return this.state.activeQuestion + 1 === this.state.quize.length;
    }

    render(){
        return(
            <div className={classes.Quize}>
                

                <div>
                    <h1>Выберите один из ответов</h1>
                    <div>
                        {
                            this.state.isFinished
                            ? <FinishedQuize 
                            
                                /> 
                            : 
                            <ActiveQuize 
                            state={this.state.answerState}
                            quizeLength={this.state.quize.length}
                            question = {this.state.quize[this.state.activeQuestion].question}
                            answers = {this.state.quize[this.state.activeQuestion].answers}
                            onAnswerClick = {this.onAnswerClickHandler}
                            answerNumber={this.state.activeQuestion + 1}
                            />
                        }
                        
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Quize;