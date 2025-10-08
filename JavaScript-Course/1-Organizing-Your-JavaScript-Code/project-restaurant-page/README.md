🍽️ Rest-o-Rant

A modern, modular restaurant website built using HTML, CSS, and JavaScript (ES6 Modules).
This project is part of a learning journey to practice DOM manipulation, modular JavaScript architecture, and dynamic content rendering — without using frameworks.

🚀 Live Preview

[👉 View Demo](https://shubham277353.github.io/Restaurant-Page/)

⚙️ How It Works
- Each tab (Home, Menu, About) is a module exporting a function (e.g. loadHome(), loadMenu(), loadAbout()).
- index.js imports all three modules and handles the tab-switching logic.
- When a tab button is clicked:
- The existing content inside the div is cleared.
- The corresponding module function runs to populate new content dynamically.

🧠 Learning Goals

- Understand modular architecture and file organization in front-end projects.
- Learn to dynamically render pages using JavaScript imports and exports.
- Build a project similar in concept to The Odin Project’s Restaurant Page assignment.

🪄 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Webpack for bundling

👨‍🍳 Credits

- Built with ❤️ by Shubham as part of a front-end learning journey.
- Inspired by The Odin Project’s Restaurant Page assignment.
