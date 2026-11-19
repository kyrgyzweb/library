# Library Books Catalog
A responsive personal library management web application built with vanilla HTML, CSS, and JavaScript. Users can add books with reading status tracking, toggle completion states, and remove entries from their collection.

## Live Project View:
(https://kyrgyzweb.github.io/library)

## Features
- **Add Books:** Submit new books with title, author, page count, and reading status.
- **Duplicate Prevention:** Automatically checks existing entries to prevent adding the same title and author twice.
- **Interactive Status Toggle:** Switch any book between **Read** and **Not Read Yet** using prototype methods (`Book.prototype.toggleRead`).
- **Remove Books:** Delete individual book cards from the catalog dynamically.
- **Responsive Flexbox Layout:** Features a sticky header and form bar on desktop that adapts cleanly to tablet and mobile screens.

## Technologies Used
- **HTML5:** Semantic markup and form validation (`required`, `min`).
- **CSS3:** Custom Flexbox layout, SVG wave divider, and responsive media queries.
- **JavaScript (ES6+):** Object constructors, prototypes, `crypto.randomUUID()`, `FormData`, and dynamic DOM manipulation.

