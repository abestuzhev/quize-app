import React from 'react';
import Auxiliary from '../hoc/Auxiliary.js'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    plusCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter +1
            }
        })
    }

    minusCounter = () => {
        this.setState( (prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    

    render(){
        return (
            
            <Auxiliary>
                    <Counter2 />
                    <div className="c-row">
                        <div>Counter {this.state.counter}</div>               
                        <button style={{margin:10}} onClick={this.minusCounter} className="c-btn">-</button>
                        <button style={{margin:10}} onClick={this.plusCounter} className="c-btn">+</button>
                    </div>
                    
            </Auxiliary>
            
        )
    }
}