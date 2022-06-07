import Input from "../../../UI/Input/Input";
import styles from './MailInput.module.css';

const MailInput = ({ changeHandler, value }) => {
    return (
        <Input
            type="email"
            label="Correo UANL:"
            id="email"
            changeHandler={changeHandler}
            className={styles.input}
            value={value}
        />
    );

};

export default MailInput;