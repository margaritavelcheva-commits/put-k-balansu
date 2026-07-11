const translations = {
    ru: {
        weekTitle: "Первая неделя",
        prev: "◀ Предыдущий",
        next: "Следующий ▶",
        weekdays: { sunday: "Воскресенье", monday: "Понедельник", tuesday: "Вторник", wednesday: "Среда", thursday: "Четверг", friday: "Пятница", saturday: "Суббота" },
        mealTypes: { breakfast: "Завтрак", lunch: "Обед", dinner: "Ужин", snack1: "Перекус 1", snack2: "Перекус 2" }
    },
    en: {
        weekTitle: "Week 1",
        prev: "◀ Previous",
        next: "Next ▶",
        weekdays: { sunday: "Sunday", monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday" },
        mealTypes: { breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", snack1: "Snack 1", snack2: "Snack 2" }
    },
    bg: {
        weekTitle: "Първа седмица",
        prev: "◀ Предишен",
        next: "Следващ ▶",
        weekdays: { sunday: "Неделя", monday: "Понеделник", tuesday: "Вторник", wednesday: "Сряда", thursday: "Четвъртък", friday: "Петък", saturday: "Събота" },
        mealTypes: { breakfast: "Закуска", lunch: "Обяд", dinner: "Вечеря", snack1: "Междинно хранене 1", snack2: "Междинно хранене 2" }
    },
    he: {
        weekTitle: "שבוע ראשון",
        prev: "◀ הקודם",
        next: "הבא ▶",
        weekdays: { sunday: "ראשון", monday: "שני", tuesday: "שלישי", wednesday: "רביעי", thursday: "חמישי", friday: "שישי", saturday: "שבת" },
        mealTypes: { breakfast: "ארוחת בוקר", lunch: "ארוחת צהריים", dinner: "ארוחת ערב", snack1: "חטיף 1", snack2: "חטיף 2" }
    }
};

const calendarData = {
    days: [
        {
            weekdayKey: "sunday",
            image: "images/day29.png",
            meals: {
                breakfast: {
                    ru: ["Ветчина из индейки 90 г (3Б)", "Овсяная лепешка 38 г (2У)", "Салат из помидоров, огурцов и салата-латука - 300 г (1У)", "Семена льна в лепешке 9 г (3Ж)"],
                    en: ["Turkey ham 90 g (3P)", "Oat flatbread 38 g (2C)", "Tomato, cucumber and lettuce salad - 300 g (1C)", "Flax seeds in the flatbread 9 g (3F)"],
                    bg: ["Шунка от пуешко месо 90 г (3Б)", "Овесена питка 38 г (2В)", "Салата от домати, краставици и маруля - 300 г (1В)", "Ленено семе в питката 9 г (3М)"],
                    he:
