let currentDay = 0;

function renderDay(index) {

    const day = calendarData.days[index];

    document.getElementById("month").textContent = calendarData.month;
    document.getElementById("dayNumber").textContent = day.day;
    document.getElementById("weekday").textContent = day.weekday;

    const dayInfo = document.getElementById("dayInfo");
    if (dayInfo) {
        dayInfo.textContent = `${day.day} ${calendarData.month}`;
    }

    const mealsContainer = document.getElementById("meals");
    mealsContainer.innerHTML = "";

    day.meals.forEach(meal => {

        const card = document.createElement("div");
        card.className = "meal-card";

        card.innerHTML = `
            <div class="meal-image">
                Фото
            </div>

            <div class="meal-content">

                <div class="meal-title">
                    ${meal.title || meal.type}
                </div>

                <div class="products">
                    ${
                        meal.products && meal.products.length
                            ? "<ul><li>" + meal.products.join("</li><li>") + "</li></ul>"
                            : ""
                    }
                </div>

                <div class="recipe">
                    ${meal.recipe || ""}
                </div>

                <div class="balance">
                    Баланс:
                    ${meal.balance.protein} Б •
                    ${meal.balance.carbs} У •
                    ${meal.balance.fat} Ж
                </div>

            </div>
        `;

        mealsContainer.appendChild(card);

    });

}

renderDay(currentDay);

document.getElementById("prevDay").addEventListener("click", () => {

    if (currentDay > 0) {
        currentDay--;
        renderDay(currentDay);
    }

});

document.getElementById("nextDay").addEventListener("click", () => {

    if (currentDay < calendarData.days.length - 1) {
        currentDay++;
        renderDay(currentDay);
    }

});
