import Input from '../../UI/Input/Input';

const NameInputs = ({ firstNameValue, firstNameChangeHandler, lastNameValue, lastNameChangeHandler }) => {
    return (
        <>
            <Input
                label="Nombre(s):"
                id="firstName"
                changeHandler={firstNameChangeHandler}
                maxLength="30"
                value={firstNameValue}
            />
            <Input
                label="Apellido(s):"
                id="lastName"
                changeHandler={lastNameChangeHandler}
                maxLength="30"
                value={lastNameValue}
            />
        </>
    )
};

export default NameInputs;