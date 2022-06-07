import ErrorModal from "../UI/ErrorModal/ErrorModal";

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
    }
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
            break
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
            for (let day in calendarData) {
                for (let i of calendarData[day]) {
                    document.getElementById(day + i).style.backgroundColor = 'green';
                }
            }
            break
        default:
            break
    }
    const { errorModal, ...storage } = newState;
    window.sessionStorage.setItem('data', JSON.stringify(storage));
    return newState;
};

export { INITIAL_STATE, reducer };