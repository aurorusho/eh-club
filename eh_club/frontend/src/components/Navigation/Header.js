import { useState } from 'react';

import styles from './Header.module.css';
import Card from '../UI/Card/Card';
import Content from '../Content/Content';
import Triangle from './Triangle';


const Header = () => {
    const [showForm, setShowForm] = useState(false);
    const registerClickHandler = () => {
        setShowForm(prev => !prev);
    };
    let registerStyles = styles.register
    if (!showForm) {
        registerStyles += ` ${styles.alwaysShow}`
    }
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.title}>
                    <h1>Club de Ethical Hacking - CIDEB</h1>
                </div>
                <Card className={registerStyles} onClick={registerClickHandler}>
                    Registro
                </Card>
                {showForm &&
                    <Card className={styles.mobileDisplay} onClick={registerClickHandler}>
                        Información
                    </Card>
                }
            </nav>
            <div className={styles.triangleAndContent}>
                <Content showForm={showForm} />
                <Triangle />
            </div>
        </ div>
    )
}

export default Header;