import Boxes from "./Boxes";
import styles from "./Content.module.css";
import Card from "../UI/Card/Card";
import Form from '../Form/Form';

const Content = ({ showForm }) => {
    let form = (
        <Card className={styles.form}>
            <Form />
        </Card>
    );
    if (!showForm) {
        form = <></>;
    }
    return (
        <div className={styles.container}>
            <Boxes registering={showForm}/>
            {form}
        </div>
    )
};
export default Content;