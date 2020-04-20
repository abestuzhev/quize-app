import React, {Component} from 'react';
import classes from './Quize.css';
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'
import FinishedQuize from '../../components/FinishedQuize/FinishedQuize'
import axios from '../../axios/axios-quize';
import Loader from "../../components/UI/Loader/Loader";


class Quize extends Component {

    state = {
        results: {}, //{[id]: 'success' 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, //{[id]: 'success' 'error'}
        quize: [],
        loading: true
    };

    onAnswerClickHandler = (answerId)=> {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            console.log('key', key)
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quize[this.state.activeQuestion];
        const  results = this.state.results;

        if(question.rightAnswer === answerId) {

            if(!results[answerId]){
                results[answerId] = 'success';
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
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
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            });
        }
         
        
    }

    isQuizeFinished() {
      return this.state.activeQuestion + 1 === this.state.quize.length;
    }

    retryHandler = ()=> {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        });
    };

    async componentDidMount() {

        try {
            const response = await axios.get(`/quize/${this.props.match.params.id}.json`);
            const quize = response.data;

            this.setState({
                quize,
                loading: false
            });

        } catch (e) {
            console.log(e)
        }

        console.log('Quize ID', this.props.match.params.id)
    }

    render(){
        return(
            <div className={classes.Quize}>
                

                <div>
                    <h1>Выберите один из ответов</h1>
                    <div>
                        {
                            this.state.loading
                                ? <Loader/>
                                : this.state.isFinished
                                ? <FinishedQuize
                                    results={this.state.results}
                                    quize = {this.state.quize}
                                    onRetry={this.retryHandler}
                                />
                                : <ActiveQuize
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