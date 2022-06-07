import Input from '../../../UI/Input/Input';
import styles from './GroupInput.module.css';

const GroupInput = ({ changeHandler, value }) => {
    return (
        <Input
            type="number"
            label="Grupo:"
            id="group"
            className={styles.input}
            changeHandler={changeHandler}
            min="100"
            max="700"
            value={value}
        />
    )
}
export default GroupInput;