import React from 'react';
import classes from './FinishedQuize.css';
import Button from '../UI/Button/Button';
import {Link} from 'react-router-dom';

const FinishedQuize = (props)=> {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success'){
            total++
        }

        return total;
    }, 0);
    return (
        <div className={classes.FinishedQuize}>
            <ul>
                {props.quize.map((quizeItem, index) => {
                    const cls=[
                        'fa',
                        props.results[quizeItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizeItem.id]]
                    ];

                    // debugger

                    return (
                        <li 
                        key="index"
                        >
                            <strong>{index + 1} {quizeItem.question}</strong> 
                            <i className={cls.join(' ')}></i>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quize.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to={'/'}>
                    <Button type="success">Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuize;