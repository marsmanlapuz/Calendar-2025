document.addEventListener("DOMContentLoaded", function () {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function createCalendar(month, year) {
        let calendarHTML = <div class="calendar"><h2>${month} ${year}</h2><table><tr>;

        // Headers (Sun - Sat)
        days.forEach(day => {
            calendarHTML += <th>${day}</th>;
        });
        calendarHTML += </tr>;

        // Get first day and total days of the month
        let firstDay = new Date(year, months.indexOf(month), 1).getDay();
        let totalDays = new Date(year, months.indexOf(month) + 1, 0).getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td></td>";
                } else if (date > totalDays) {
                    break;
                } else {
                    calendarHTML += <td>${date}</td>;
                    date++;
                }
            }
            calendarHTML += "</tr>";
        }
        calendarHTML += "</table></div>";

        return calendarHTML;
    }

    // Insert calendars for each month
    const container = document.getElementById("calendar-container");
    months.forEach(month => {
        container.innerHTML += createCalendar(month, 2025);
    });
});
