let newDate, year, leap;

function isLeapYear(date) {
    newDate = new Date(date);
    if (newDate instanceof Date && isNaN(newDate)) {
        return newDate;
    } else {
        year = newDate.getFullYear();
        leap = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        if (leap) {
            return `${year} is a leap year`
        } else {
            return `${year} is not a leap year`
        }
    }
}

isLeapYear('2020-01-01 00:00:00');