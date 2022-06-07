import styles from './Triangle.module.css'
import Card from "../UI/Card/Card";
import WhatsappLogo from "../UI/WhatsappLogo/WhatsappLogo";
import triangleImg from '../../assets/triangle.png';

import whatsappLink from '../../values/whatsappLink';
import targetBlank from '../../values/targetBlank';

const Triangle = () => {
    return (
            <div className={styles.imageContainer}>
                <img src={triangleImg} alt="Triangulo chidote" />
                <a href={whatsappLink} className={styles.link} {...targetBlank}>
                    <Card className={styles.questions}>
                        ¿Dudas?
                    </Card>
                    <WhatsappLogo />
                </a>
            </div>
    );
}

export default Triangle;