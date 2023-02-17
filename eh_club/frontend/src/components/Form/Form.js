import { useReducer, useEffect } from 'react';

import styles from './Form.module.css';

import NameInputs from "./Fields/NameInputs"
import GroupInput from "./Fields/GroupInput/GroupInput";
import MailInput from "./Fields/MailInput/MailInput";
import Calendar from "./Fields/Calendar/Calendar";
import Checkbox from './Fields/Checkbox/Checkbox';
import Submit from './Fields/Submit/Submit';

import targetBlank from '../../values/targetBlank';

import { INITIAL_STATE, reducer } from './utils/formReducer';
import { getCookie } from './utils/getCookie';

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
    const makeRequest = async ({firstName, lastName, group, mail, calendarData}) => {
        const response = await fetch('api/submit', {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                group : Number(group),
                mail,
                calendarData,
            }),
            headers: {
                "X-CSRFToken": getCookie('csrftoken')
            }
        });
        const dispatchObj = {
            type : 'formMsg',
            value: {
                ok : response.ok
            }
        };
        if(!response.ok){
            dispatch(dispatchObj);
        }
        // else:
        dispatchObj.value.success = (await response.json()).success;
        dispatch(dispatchObj);
        
    };
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
        const { firstName, lastName, group, mail, checkbox, calendarData }
            = state;
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
        else if (group < 100 || group > 700) {
            dispatchError("Introduce un grupo válido");
            return;
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
        for (let key in calendarData) {
            if (calendarData[key].length) {
                atLeastOne = true;
                break;
            }
        }
        if (!atLeastOne) {
            dispatchError('No seleccionaste ningún horario disponible');
            return;
        }
        if (!checkbox) {
            const link = <a href="/Reglamento_club.pdf" {...targetBlank}>reglamento</a>
            const msg = (
                <>
                    Para registrarte, lee y acepta que estás de acuerdo con el {link}
                </>
            );
            dispatchError(msg);
            return;
        }
        makeRequest(state);
    }

    const checkboxValue = state.checkbox ? true : "";
    const formMsgColor = state.formMsg[0] ? 'red' : 'green';
    const formMsgClassName = `${styles.formMsg} ${styles[formMsgColor]}`
    return (
        <form onSubmit={submitHandler}>
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
            <div className={formMsgClassName}>{ state.formMsg }</div>
        </form>
    )
}

export default Form;