import React, {Component} from 'react';
import classes from './QuizeList.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export default class QuizeList extends Component {

    renderQuizes(){
        return [1,2,3].map((quize, index)=>{
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quize/' + quize}>
                        Тест {quize}
                    </NavLink>
                </li>
            )
        });
    }

    async componentDidMount() {
        try{
            const response = await axios.get('https://quize-dcede.firebaseio.com/quize.json');
            Object.keys(response.data)
        }catch (e){
            console.log(e);
        }
    }


    render(){
        return (
            <div className={classes.QuizeList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>

            </div>
        )
    }

}