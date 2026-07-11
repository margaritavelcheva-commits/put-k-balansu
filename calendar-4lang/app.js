let currentLang = "ru";
let currentDay = 0;

const dayContainer = document.getElementById("dayContainer");
const langButtons = document.querySelectorAll(".lang-btn");
const prevBtn = document.getElementById("prevDay");
const nextBtn = document.getElementById("nextDay");

function renderDay(index) {
    const day = calendarData.days[index];
    const t = translations[currentLang];

    document.documentElement.setAttribute("dir", currentLang === "he" ? "rtl" : "ltr");
    prevBtn.textContent = t.prev;
    nextBtn.textContent = t.next;

    function mealBlock(key) {
        const items = day.meals[key][currentLang];
        return `
            <div class="meal-block">
                <h3>${t.mealTypes[key]}</h3>
                <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>
        `;
    }

    dayContainer.innerHTML = `
        <h1 class="weekday-title">${t.weekdays[day.weekdayKey]}</h1>
        <div class="week-title">${t.weekTitle}</div>
        <div class="day-photo"><img src="${day.image}" alt=""></div>
        ${mealBlock("breakfast")}
        ${mealBlock("lunch")}
        ${mealBlock("dinner")}
        ${mealBlock("snack1")}
        ${mealBlock("snack2")}
    `;
}

function nextDay(){
    currentDay = (currentDay + 1) % calendarData.days.length;
    renderDay(currentDay);
}
function prevDay(){
    currentDay = (currentDay - 1 + calendarData.days.length) % calendarData.days.length;
    renderDay(currentDay);
}

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
