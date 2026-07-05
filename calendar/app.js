document.getElementById("month").textContent = "ИЮЛЬ";
document.getElementById("dayNumber").textContent = "1";
document.getElementById("weekday").textContent = "ПОНЕДЕЛЬНИК";

const meals = document.getElementById("meals");

const mealTypes = [
    "ЗАВТРАК",
    "ПЕРЕКУС",
    "ОБЕД",
    "ПЕРЕКУС",
    "УЖИН"
];

mealTypes.forEach(type => {

    const card = document.createElement("div");
    card.className = "meal-card";

    card.innerHTML = `
        <div class="meal-image">Фото</div>

        <div class="meal-content">

            <div class="meal-title">${type}</div>

            <div class="products">
                Список продуктов появится здесь.
            </div>

            <div class="recipe">
                Описание рецепта появится здесь.
            </div>

            <div class="balance">
                Баланс: —
            </div>

        </div>
    `;

    meals.appendChild(card);

});
