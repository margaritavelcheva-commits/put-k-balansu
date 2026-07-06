/* ==========================
   APP.JS
========================== */

let currentDay = 0;

const month = document.getElementById("month");
const dayNumber = document.getElementById("dayNumber");
const weekday = document.getElementById("weekday");
const meals = document.getElementById("meals");

function renderDay(index){

    const day = calendarData.days[index];

    month.textContent = calendarData.month;
    dayNumber.textContent = day.day;
    weekday.textContent = day.weekday;

    let html = "";

    if(day.image){

        html += `
        <div class="day-photo">
            <img src="${day.image}" alt="${day.weekday}">
        </div>
        `;

    }

    day.meals.forEach(meal=>{

        html += `

        <section class="meal-card">

            <div class="meal-title">
                ${meal.type}
            </div>

            <div class="products">

                <ul>

                    ${meal.products.map(product=>`
                        <li>${product}</li>
                    `).join("")}

                </ul>

            </div>

            <div class="balance">

                ${meal.balance ?? ""}

            </div>

        </section>

        `;

    });

    meals.innerHTML = html;

}

document.getElementById("nextDay").onclick=function(){

    currentDay++;

    if(currentDay>=calendarData.days.length){

        currentDay=0;

    }

    renderDay(currentDay);

}

document.getElementById("prevDay").onclick=function(){

    currentDay--;

    if(currentDay<0){

        currentDay=calendarData.days.length-1;

    }

    renderDay(currentDay);

}

renderDay(currentDay);
