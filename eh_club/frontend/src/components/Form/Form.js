import { useReducer, useEffect } from 'react';

import styles from './Form.module.css';

import NameInputs from "./Fields/NameInputs"
import GroupInput from "./Fields/GroupInput/GroupInput";
import MailInput from "./Fields/MailInput/MailInput";
import Calendar from "./Fields/Calendar/Calendar";
import Checkbox from './Fields/Checkbox/Checkbox';
import Submit from './Fields/Submit/Submit';

import targetBlank from '../../values/targetBlank';

import {INITIAL_STATE, reducer} from './formReducer';

const Form = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        dispatch({ type: 'sessionStorage' });
    }, []);

    const changeHandler = action_type => {
        return ev => {
            dispatch({ type: action_type, value: ev.target.value });
        }
    }

    const removeModal = () => {
        dispatch({ type: 'removeModal' });
    };
    const dispatchError = (message) => {
        dispatch({ type: 'error', message: message, onRemove: removeModal });
    };

    const calendarClickHandler = (ev) => {
        dispatch({ type: 'calendar', id: ev.target.id });
    };
    const submitHandler = (ev) => {
        ev.preventDefault();
        const { firstName, lastName, group, mail} = state;
        if (!firstName) {
            dispatchError("Introduce tu nombre en el campo correspondiente");
            return;
        }
        else if (!lastName) {
            dispatchError("Introduce tus apellidos en el campo correspondiente");
            return;
        }
        else if (!group) {
            dispatchError("Introduce tu grupo en el campo correspondiente");
            return;
        }
        else if(group < 100 || group > 700){
            dispatchError("Introduce un grupo válido");
        }
        else if (!mail) {
            dispatchError("Introduce tu correo en el campo correspondiente");
            return;
        }
        else if (!(mail.endsWith('@uanl.edu.mx'))) {
            dispatchError("Utiliza tu correo @uanl.edu.mx");
            return;
        }
        // There is at least one selected hour
        let atLeastOne = false;
        for(let key in state.calendarData){
            if(state.calendarData[key].length){
                atLeastOne = true;
                break;
            }
        }
        if(!atLeastOne){
            dispatchError('No seleccionaste ningún horario disponible');
            return;
        }
        if (!state.checkbox) {
            const link = <a href="/Reglamento_club.pdf" {...targetBlank}>reglamento</a>
            const msg = (
                <>
                    Para registrarte, lee y acepta que estás de acuerdo con el {link}
                </>
            );
            dispatchError(msg);
            return;
        }
    }

    const checkboxValue = state.checkbox ? true : "";
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            {state.errorModal}
            <NameInputs
                firstNameValue={state.firstName}
                lastNameValue={state.lastName}
                firstNameChangeHandler={changeHandler('firstName')}
                lastNameChangeHandler={changeHandler('lastName')}
            />
            <GroupInput
                value={state.group}
                changeHandler={changeHandler('group')}
            />
            <MailInput
                value={state.mail}
                changeHandler={changeHandler('mail')}
            />
            <Calendar clickHandler={calendarClickHandler} />
            <Checkbox changeHandler={changeHandler('checkbox')} value={checkboxValue} />
            <Submit />
        </form>
    )
}

export default Form;