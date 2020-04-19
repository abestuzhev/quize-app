import React from 'react';
import classes from './Input.css';

function isInvalide({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched;

}



export default props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`;

    if(isInvalide(props)) {
        cls.push(classes.invalid);
    }



    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                id={htmlFor}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalide(props)
            ? <span>{props.errorMessage || 'Введите верное значение'}</span>
            : null
            }


        </div>
    )
}