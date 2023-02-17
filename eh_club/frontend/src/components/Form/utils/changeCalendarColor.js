const changeCalendarColor = (calendarData, color) => {
    for (let day in calendarData) {
        for (let i of calendarData[day]) {
            document.getElementById(day + i).style.backgroundColor = color;
        }
    }
};
export { changeCalendarColor };