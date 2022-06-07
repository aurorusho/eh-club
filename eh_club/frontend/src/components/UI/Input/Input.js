import styles from './Input.module.css';

const Input = (props) => {
    delete props.children;
    const {
        label,
        id,
        changeHandler,
        className,
        value,
    } = props;
    const inputClassName = className ? `${className} ` : ''
    // Check for type in props
    let { type } = props;
    if (!type) {
        type = "text";
    }
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                className={inputClassName + styles.input}
                id={id}
                onChange={changeHandler}
                value={value}
            />
        </div>
    );
};
export default Input;