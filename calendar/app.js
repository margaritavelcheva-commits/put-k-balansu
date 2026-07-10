/* ==========================
   APP.JS
========================== */
let currentDay = 0;
const month = document.getElementById("month");
const dayNumber = document.getElementById("dayNumber");
const weekday = document.getElementById("weekday");
const meals = document.getElementById("meals");
const prevBtn = document.getElementById("prevDay");

function renderDay(index) {
    const day = calendarData.days[index];
    month.textContent = "";
    dayNumber.textContent = day.day;
    weekday.textContent = day.weekday;

    let html = "";

    if (day.isMenu) {
        html = `
            <div class="week-menu">
                <h2>Выберите неделю</h2>
                <div class="week-buttons">
                    <button onclick="goToWeek(1)">Неделя 1</button>
                    <button onclick="goToWeek(2)">Неделя 2</button>
                    <button onclick="goToWeek(3)">Неделя 3</button>
                    <button onclick="goToWeek(4)">Неделя 4</button>
                </div>
            </div>
        `;
    } else if (day.meals.length > 0 && day.meals[0].image) {
        html = `
            <div class="day-photo">
                <img src="${day.meals[0].image}" alt="${day.weekday}">
            </div>
        `;
    }
    meals.innerHTML = html;

    // Скрий бутона "Предыдущий" само на корицата (индекс 0)
    prevBtn.style.visibility = (index === 0) ? "hidden" : "visible";

    // Отбележи корицата, за да важат специалните ѝ CSS правила
    document.body.classList.toggle("cover-page", index === 0);
}

function goToWeek(weekNum) {
    const startOfWeek1 = 2; // индекс на Ден 1 в масива
    currentDay = startOfWeek1 + (weekNum - 1) * 7;
    renderDay(currentDay);
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
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
        nextDay();
    }
    if(e.key === "ArrowLeft"){
        prevDay();
    }
});
renderDay(currentDay);
