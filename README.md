# HTML and CSS Assignment

This is a school project created to practise the fundamentals of HTML, CSS, and JavaScript. It contains a main assignment menu, four small calculator exercises, and personal profile pages for a resume and hobbies.

## Project Contents

| File | Description |
| --- | --- |
| `index.html` | Main menu with links to the calculator exercises. |
| `converter.html` | Converts inches to centimetres using `1 inch = 2.54 cm`. |
| `grading.html` | Converts a score from 0 to 100 into a letter grade. |
| `change.html` | Calculates the number of Thai baht notes and coins needed for an amount. |
| `distance.html` | Calculates the distance from the origin using X and Y coordinates. |
| `resume.html` | Personal information, contact details, education, skills, and interests. |
| `hobby.html` | Information about gaming and learning technology. |
| `styles.css` | Shared responsive styling for every assignment page. |
| `resume&hobby.css` | Compatibility file that loads `styles.css` for older links. |

## Calculator Rules

### Measurement Converter

Enter a non-negative value in inches. The result is calculated with:

```text
centimetres = inches x 2.54
```

### Grade Calculator

Enter a score between 0 and 100. The grading scale is:

| Score | Grade |
| --- | --- |
| 80-100 | A |
| 70-79 | B |
| 60-69 | C |
| 50-59 | D |
| 0-49 | F |

### Change Calculator

Enter a positive amount. The page uses these Thai baht denominations, from largest to smallest:

`1000, 500, 100, 50, 20, 10, 5, 2, 1, and 0.5`

### Distance Calculator

Enter X and Y coordinates. The distance from `(0, 0)` is calculated with:

```text
distance = sqrt((x^2) + (y^2))
```

The result is displayed to two decimal places.

## How to Run

1. Open the `assignment` folder in a web browser or in Visual Studio Code.
2. Open `index.html` to view the assignment menu.
3. Select a calculator from the menu.
4. Open `resume.html` or `hobby.html` directly to view the profile pages.

No external libraries, build tools, or server are required. The project runs as static HTML files in a modern web browser.

## Learning Objectives

- Create webpages with HTML structure and form controls.
- Apply CSS styling to page content and layouts.
- Use JavaScript functions, variables, conditions, loops, and DOM updates.
- Validate user input and display helpful messages.
- Connect multiple pages with hyperlinks.
