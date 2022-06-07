import styles from './Footer.module.css';
import WhatsappLogo from '../UI/WhatsappLogo/WhatsappLogo';
import targetBlank from '../../values/targetBlank';
import whatsappLink from '../../values/whatsappLink';

const Footer = () => {
    const SOURCE_CODE = 'https://github.com/aurorusho/eh-club-frontend';
    const SOURCE_CODE_LINK = (
        <a
            href={SOURCE_CODE}
            className={styles.a}
            {...targetBlank}
        >
            {SOURCE_CODE}
        </a>
    );
    return (
        <footer className={styles.footer}>
            <div className={styles.textWrapper}>
                <p className={styles.text}>Código fuente: {SOURCE_CODE_LINK}</p>
            </div>
            <div className={styles.flexLinks}>
                <div className={styles.whatsappLogoContainer}>
                    <div className={styles.questions}>
                        <a href={whatsappLink} {...targetBlank} className={styles.questionLink}>¿Dudas?</a>
                    </div>
                    <a href={whatsappLink} {...targetBlank} className={styles.whatsappLogoLink}>
                        <WhatsappLogo className={styles.whatsappLogo} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;