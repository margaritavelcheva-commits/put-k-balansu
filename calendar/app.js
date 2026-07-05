const day = calendarData.days[0];

document.getElementById("month").textContent = calendarData.month;
document.getElementById("dayNumber").textContent = day.day;
document.getElementById("weekday").textContent = day.weekday;

const mealsContainer = document.getElementById("meals");

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
                    meal.products.length
                        ? "<ul><li>" + meal.products.join("</li><li>") + "</li></ul>"
                        : ""
                }
            </div>

            <div class="recipe">
                ${meal.recipe}
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
