# TEMPLATE SPECIFICATION

## Project

**Месячный календарь**

Interactive monthly calendar based on Barry Sears' Zone principles.

---

# Project Goal

Create a single editable Master Template from which every calendar day is generated automatically.

The project must contain only one HTML template, one CSS stylesheet and one JavaScript data source.

No manual editing of individual calendar pages is allowed.

---

# Project Architecture

```
index.html
style.css
app.js
data.js

/images
/fonts
/docs
```

---

# Responsibilities

## index.html

Contains only the page structure.

No recipes.

No meal texts.

No hardcoded dates.

Everything is inserted dynamically by JavaScript.

---

## style.css

Contains every visual rule of the project.

Typography

Colors

Spacing

Borders

Image sizes

Icons

Printing rules

Responsive behavior

---

## app.js

Reads the data from data.js.

Builds every calendar page automatically.

Example:

renderDay(1)

renderDay(15)

renderDay(31)

---

## data.js

Contains only data.

No HTML.

No CSS.

Each calendar day is represented as one object.

Example structure:

Day

Month

Weekday

Breakfast

Snack

Lunch

Snack

Dinner

Images

Zone blocks

---

# Image Naming Convention

day01_breakfast.jpg

day01_snack1.jpg

day01_lunch.jpg

day01_snack2.jpg

day01_dinner.jpg

day02_breakfast.jpg

...

The naming convention must remain identical throughout the project.

---

# Design Principles

The visual design is identical for every day.

Only the content changes.

The template must never be duplicated.

All pages are generated from the same source.

---

# Editorial Standards

Project-specific wording follows the approved standards.

Examples:

• Ветчина из индейки

• Омлет из 6 яичных белков

• Тилапия

The wording is maintained consistently across the entire project.

---

# Future Extensions

The architecture must support:

- automatic PDF generation

- automatic printing

- automatic navigation

- search

- recipe index

- monthly export

without changing the HTML template.

---

This document is the official technical specification of the project and is updated whenever new architectural decisions are approved.
