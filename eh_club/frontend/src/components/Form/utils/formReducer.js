import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { changeCalendarColor } from "./changeCalendarColor";

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    group: '',
    mail: '',
    checkbox: false,
    errorModal: <></>,
    calendarData: {
        'L': [],
        'M': [],
        'W': [],
        'J': [],
        'V': [],
        'S': []
    },
    formMsg: [false, ''],
};

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'firstName':
            // requires action.value
            newState = {
                ...state,
                firstName: action.value
            };
            break;
        case 'lastName':
            // requires action.value
            newState = {
                ...state,
                lastName: action.value
            };
            break
        case 'group':
            newState = {
                ...state,
                group: action.value
            };
            break;
        case 'mail':
            newState = {
                ...state,
                mail: action.value
            };
            break;
        case 'checkbox':
            newState = {
                ...state,
                checkbox: !state.checkbox
            };
            break;
        case 'calendar':
            // requires action.id
            const { id } = action;
            const target = document.getElementById(id);
            const day = id[0];
            const hour = id.slice(1);
            if (state.calendarData[day].includes(hour)) {
                state.calendarData[day] = state.calendarData[day].filter(val => {
                    return val !== hour
                });
                target.style.backgroundColor = 'aliceblue';
            } else {
                state.calendarData[day].push(hour);
                target.style.backgroundColor = 'green';
            }
            newState = state;
            break;
        case 'error':
            // requires action.message and action.onRemove
            newState = {
                ...state,
                errorModal: <ErrorModal header="Error" message={action.message} onConfirm={action.onRemove} />
            };
            break;
        case 'removeModal':
            newState = {
                ...state,
                errorModal: <></>
            };
            break;
        case 'formMsg':
            // requires action.value
            let msg = 'Se ha enviado exitosamente!';
            let isError = false;
            // if there is an error with the http request
            if(!action.value.ok){
                msg = 'Hubo un error al enviar tus datos, intenta más tarde o contáctanos al whatsapp';
                isError = true;
            }
            // if there is an error with the data
            else if(!action.value.success){
                msg = 'Enviaste datos no válidos, verifica que hayas rellenado todos los campos correctamente';
                isError = true;
            }
            // If there are no errors, restart the state
            if(!isError){
                changeCalendarColor(state.calendarData, 'aliceblue');
                newState = INITIAL_STATE;
            }
            newState = {
                ...newState,
                formMsg : [isError, msg]
            }
            break;
        case 'sessionStorage':
            // Excecuted in useEffect(() => {}, [])
            const data = JSON.parse(window.sessionStorage.getItem('data'));
            if (!data) {
                newState = state;
            }
            // else
            newState = {
                ...state,
                ...data
            };
            const { calendarData } = newState;
            changeCalendarColor(calendarData, 'green');
            break
        default:
            break
    }
    const { errorModal, formMsg, ...storage } = newState;
    window.sessionStorage.setItem('data', JSON.stringify(storage));
    return newState;
};

export { INITIAL_STATE, reducer };