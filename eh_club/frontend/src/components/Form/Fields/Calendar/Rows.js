import styles from './Rows.module.css';

// Converts from 24 hour format to 12 hour format
const change24To12 = (hour) => hour < 13 ? hour : hour - 12

// Returns filling divs


const Rows = ({ clickHandler }) => {
    const weekDays = ['L', 'M', 'M', 'J', 'V', 'S'];
    const firstRow = ['H', ...weekDays].map(
        (value, index) => {
            return (
                <div key={value + index}>
                    {value}
                </div>
            )
        }
    );
    let rows = [
        <div className={styles.firstRow} key="firstRow">
            {firstRow}
        </div>
    ];
    for (let i = 7; i < 21; i++) {
        let start = change24To12(i)
        let end = change24To12(i + 1)
        let className = styles.row
        if (i === 10 || i === 11) {
            className += ` ${styles.bigRow}`
        }
        let fillingDivs = weekDays.map(
            (day, index) => {
                if (index === 2) {
                    day = 'W';
                }
                return (
                    <div
                        key={day + i}
                        id={day + i}
                        onClick={clickHandler}
                        ></div>
                );
            });
        rows.push(
            <div className={className} key={i}>
                <div>{start}-{end}</div>
                {fillingDivs}
            </div>
        )
    }
    return rows;
}

export default Rows;