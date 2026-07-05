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
                ${meal.type}
            </div>

            <div class="products">

                ${
                    meal.products.length
                    ? meal.products.map(p => `
                        <div>${p.name} — ${p.amount}</div>
                    `).join("")
                    : "<em>Список продуктов будет добавлен позже</em>"
                }

            </div>

            <div class="recipe">

                ${
                    meal.recipe.intro
                    ? meal.recipe.intro
                    : "Описание рецепта будет добавлено позже."
                }

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
