import styles from './Box.module.css';
import Card from '../UI/Card/Card';

const Box = ({ title, text }) => {
    return (
        <div className={styles.box}>
            <Card className={styles.title}>
                <div>{title}</div>
            </Card>
            <Card className={styles.text}>
                <div>{text}</div>
            </Card>
        </div>
    )
};
export default Box;