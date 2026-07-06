/* ==========================
   APP.JS
========================== */

let currentDay = 0;

const month = document.getElementById("month");
const dayNumber = document.getElementById("dayNumber");
const weekday = document.getElementById("weekday");
const meals = document.getElementById("meals");

function renderDay(index) {

    const day = calendarData.days[index];

    month.textContent = calendarData.month;
    dayNumber.textContent = day.day;
    weekday.textContent = day.weekday;

    let html = "";

    if (day.image) {
        html += `
            <div class="day-photo">
                <img src="${day.image}" alt="${day.weekday}">
            </div>
        `;
    }

    day.meals.forEach(meal => {

        const balance = meal.balance
            ? `Баланс: ${meal.balance.protein} П • ${meal.balance.carbs} В • ${meal.balance.fat} М`
            : "";

        html += `
            <section class="meal-card">

                <div class="meal-title">
                    ${meal.type}
                </div>

                <div class="products">
                    <ul>
                        ${meal.products.map(product => `<li>${product}</li>`).join("")}
                    </ul>
                </div>

                ${balance ? `
                    <div class="balance">
                        ${balance}
                    </div>
                ` : ""}

            </section>
        `;

    });

    meals.innerHTML = html;

}

function nextDay() {

    currentDay++;

    if (currentDay >= calendarData.days.length) {
        currentDay = 0;
    }

    renderDay(currentDay);

}

function prevDay() {

    currentDay--;

    if (currentDay < 0) {
        currentDay = calendarData.days.length - 1;
    }

    renderDay(currentDay);

}

document.getElementById("nextDay").addEventListener("click", nextDay);
document.getElementById("prevDay").addEventListener("click", prevDay);

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
        nextDay();
    }

    if (e.key === "ArrowLeft") {
        prevDay();
    }

});

renderDay(currentDay);
