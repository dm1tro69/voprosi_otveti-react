import React from 'react'
import classes from './Input.css'

function isInValid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched

}

const Input = (props) => {

    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`
    if(isInValid(props)){
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                id={htmlFor}
                value={props.value}
                type={inputType}
                onChange={props.onChange}
            />
            {
                isInValid(props) ?
                    <span>{props.errorMessage ||
                    'Введите верное значение'}</span>
                    : null
            }


        </div>
    )
}
export default Input