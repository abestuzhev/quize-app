import React, {Component} from 'react';
import Car from './Car/Car.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
import Counter from './Counter/Counter.js';
import './App.css';

class App extends Component {

    constructor(props){
        console.log('App constructor');
        super(props);
        this.state = {
            cars: [
                {name:'Ford', year: 2020},
                {name:'Audi', year: 2017},
                {name:'Mazda', year: 2016}
            ],
            pageTitle: 'React components',
            showCars: false
        }
    }

    

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    }

    onChangeName(name, index){
        const car = this.state.cars[index]
        car.name = name;
        // const cars = this.state.cars.concat(); //clone array
        const cars = [...this.state.cars]; //clone array ES6
        cars[index] = car;
        this.setState({
            cars: cars
        });
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars: cars
        });
    }   
    
    componentWillMount(){
        console.log('App componentWillMount');
    }

    componentDidMount(){
        console.log('App componentDidMount');
    }
    
    render() { 
        console.log('App Render');
        const divStyle = {
            textAlign: 'center'
        };

        let cars = null;
        if(this.state.showCars){
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key= {index}>
                    <Car 
                        name={car.name} 
                        year={car.year}
                        onDelete = {this.deleteHandler.bind(this, index)}
                        onChangeName = { (event) => this.onChangeName(event.target.value, index) }
                    />
                    </ErrorBoundary>
                )
            })
        }

        
        return ( 
            <div style={divStyle}>
                <h2> {this.state.pageTitle} </h2> 

                <div className="c-row">
                    <Counter />
                </div>

                <div className="c-row">
                <button 
                onClick={this.toggleCarsHandler} className="c-btn">
                    Toggle cars</button>
                </div>
                

                
    
                <div className="card-list" style={{width:400, margin: 'auto'}}>
                    {
                    cars
                    }
                </div>
            </div>
        );
    }
}
 
export default App;