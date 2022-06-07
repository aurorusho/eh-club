import styles from './Checkbox.module.css';
import targetBlank from '../../../../values/targetBlank';

const Checkbox = ({ changeHandler, value }) => {
    const id = "checkbox"
    const adviseLink = (
        <a href="/Reglamento_club.pdf" {...targetBlank}>
            reglamento
        </a>
    )
    return (
        <div className={styles.container}>
            <label htmlFor={id}>He leído el {adviseLink}</label>
            <input
                type="checkbox"
                onChange={changeHandler}
                id={id}
                className={styles.input}
                value={value}
                checked={value}
            />
        </div>
    )
};
export default Checkbox;