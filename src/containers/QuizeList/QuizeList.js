import React, {Component} from 'react';
import classes from './QuizeList.css';
import {NavLink} from 'react-router-dom';
import axios from '../../axios/axios-quize';
import Loader from "../../components/UI/Loader/Loader";

export default class QuizeList extends Component {

    state = {
        quizes: [],
        loading: true
    };

    renderQuizes(){
        return this.state.quizes.map((quize) => {
            return (
                <li
                    key={quize.id}
                >
                    <NavLink to={'/quize/' + quize.id}>
                        {quize.name}
                    </NavLink>
                </li>
            )
        });
    }

    async componentDidMount() {
        try{
            const quizes = [];
            const response = await axios.get('/quize.json');
            Object.keys(response.data).forEach((key, index)=>{
                quizes.push({
                    id: key,
                    name: `Тест ${index + 1}`
                });
            });

            this.setState({
                quizes: quizes,
                loading: false
            })
        }catch (e){
            console.log(e);
        }
    }


    render(){
        return (

            <div className={classes.QuizeList}>
                <div>
                    <h1>Список тестов</h1>

                    { this.state.loading
                        ? <Loader />
                        : <ul>
                            {this.renderQuizes()}
                        </ul>
                    }
                </div>
            </div>



        )
    }

}