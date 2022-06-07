import Box from "./Box";
import styles from "./Boxes.module.css";

const Boxes = ({ registering }) => {
    let containerStyle = styles.nestedContainer;
    if (registering){
        containerStyle += ` ${styles.hideIfMobile}`
    }
    return (
        <div className={styles.container}>
            <div className={containerStyle}>
                <Box
                    title="Objetivo"
                    text="Instruir y aprender profundamente sobre temas de ethical hacking y ciberseguridad."
                />
                <Box
                    title="Conocimientos"
                    text="Aprenderemos las bases de computación; los lenguajes de programación python y bash; y su uso en la ciberseguridad; entre otras cosas."
                />
                <Box
                    title="Requisitos"
                    text="Tener una computadora con un mínimo de 4GB de memoria RAM y un disco duro con un mínimo de 124GB de almacenamiento."
                />
                <Box
                    title="Organización"
                    text="Los horarios se decidirán según la disponibilidad de los miembros indicada en el formulario de registro."
                />
            </ div>
        </div>
    )
};
export default Boxes;