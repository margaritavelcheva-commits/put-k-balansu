let currentLang = "ru";
let currentDay = 0;

const dayContainer = document.getElementById("dayContainer");
const langButtons = document.querySelectorAll(".lang-btn");
const prevBtn = document.getElementById("prevDay");
const nextBtn = document.getElementById("nextDay");
const homeBtn = document.getElementById("homeBtn");

function renderDay(index) {
    const day = calendarData.days[index];
    const t = translations[currentLang];

    document.documentElement.setAttribute("dir", currentLang === "he" ? "rtl" : "ltr");
    prevBtn.textContent = t.prev;
    nextBtn.textContent = t.next;
    homeBtn.textContent = t.menuBtn;

    // Скрий бутоните Предыдущий/Следующий на самата меню страница
    prevBtn.style.visibility = day.isMenu ? "hidden" : "visible";
    nextBtn.style.visibility = day.isMenu ? "hidden" : "visible";
    homeBtn.style.visibility = day.isMenu ? "hidden" : "visible";

    if (day.isMenu) {
        dayContainer.innerHTML = `
            <div class="week-menu">
                <h2>${t.menuTitle}</h2>
                <div class="week-buttons">
                    <button onclick="goToWeek(1)">${t.week1}</button>
                    <button onclick="goToWeek(2)">${t.week2}</button>
                    <button onclick="goToWeek(3)">${t.week3}</button>
                    <button onclick="goToWeek(4)">${t.week4}</button>
                </div>
            </div>
        `;
        return;
    }

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

function goToWeek(weekNum) {
    const startOfWeek1 = 1; // индекс на Ден 1 в масива (0 е менюто)
    const target = startOfWeek1 + (weekNum - 1) * 7;
    if (target >= calendarData.days.length) {
        alert("Эта неделя еще не готова");
        return;
    }
    currentDay = target;
    renderDay(currentDay);
}

function goHome() {
    currentDay = 0; // индекс на менюто
    renderDay(currentDay);
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
        currentLang = btn.dataset.lang;
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderDay(currentDay);
    });
});

nextBtn.addEventListener("click", nextDay);
prevBtn.addEventListener("click", prevDay);
homeBtn.addEventListener("click", goHome);

renderDay(currentDay);
