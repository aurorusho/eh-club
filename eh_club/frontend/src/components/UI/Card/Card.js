import styles from './Card.module.css';

const Card = ({ children, className, onClick }) => {
    const styleClassName = className ? `${className} ` : ''
    return (
        <div className={styleClassName + styles.card} onClick={onClick}>
            {children}
        </div>
    )
};
export default Card;