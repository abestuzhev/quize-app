import React from 'react';
import './Car.css';

class Car extends React.Component {

    // жизненные циклы изменения компонента
    componentWillReceiveProps(nextProps){
        console.log('Car componentWillReceiveProps', nextProps );
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Car shouldComponentUpdate', nextProps, nextState );
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Car componentWillUpdate', nextProps, nextState );
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('Car getDirivedStateFromProps', nextProps, prevState ); 
    //     return prevState;
    // }

    componentDidUpdate(){
        console.log('Car componentDidUpdate');
    }

    // getSnapshotBeforeUpdate(){
    //     console.log('Car getSnapshotBeforeUpdate');
    // }


    componentWillUnmount(){
        console.log('Car componentWillUnmount');
    }

    render(){
        console.log('Car render');
        const inputClasses = ['c-input'];

        if(this.props.name !== ''){
            inputClasses.push('green');
        }else {
            inputClasses.push('red');
        }
    
        if(this.props.name.length > 4) {
            inputClasses.push('bold');
        }
    
        return (
            <div className="card-list__item">
                <div className="car-card" >
                    <h3>Car name: {this.props.name}</h3>
                    <strong>Year: {this.props.year}</strong>
                    <div>
                        <input 
                        type="text" 
                        className={inputClasses.join(' ')} 
                        onChange = {this.props.onChangeName} 
                        value={this.props.name}/>
                    </div>
                    
                    <button onClick={this.props.onDelete} className="c-btn-del"></button>
                </div>
            </div>
        )
    }
}

export default Car;