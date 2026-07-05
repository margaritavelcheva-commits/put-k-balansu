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

           <div class="meal-title">
    ${meal.title || meal.type}
</div>

<div class="products">

    ${
        meal.products.length
            ? "<ul>" + meal.products.map(item => `<li>${item}</li>`).join("") + "</ul>"
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

    meals.appendChild(card);

});
