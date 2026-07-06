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

    month.textContent = "";
    dayNumber.textContent = day.day;
    weekday.textContent = day.weekday;

    let html = "";

    day.meals.forEach(meal => {

        const balance = meal.balance
            ? `${meal.balance.protein} П • ${meal.balance.carbs} У • ${meal.balance.fat} Ж`
            : "";

        html += `

        <section class="meal-card">

            ${meal.image ? `
            <div class="day-photo">
                <img src="${meal.image}" alt="${meal.title}">
            </div>
            ` : ""}

            <div class="meal-title">
                ${meal.type}
            </div>

            <div class="meal-content">

                ${meal.title ? `
                    <h3>${meal.title}</h3>
                ` : ""}

                ${meal.products.length ? `
                <div class="products">
                    <ul>
                        ${meal.products.map(product => `
                            <li>${product}</li>
                        `).join("")}
                    </ul>
                </div>
                ` : ""}

                ${meal.recipe ? `
                <div class="recipe">
                    ${meal.recipe}
                </div>
                ` : ""}

                ${balance ? `
                <div class="balance">
                    Баланс: ${balance}
                </div>
                ` : ""}

            </div>

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

document.addEventListener("keydown", function(e){

    if(e.key === "ArrowRight"){
        nextDay();
    }

    if(e.key === "ArrowLeft"){
        prevDay();
    }

});

renderDay(currentDay);
