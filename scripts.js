document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    // Function to switch themes with transition
    function switchTheme(newClass, oldClass) {
        if (body.classList.contains(oldClass)) {
            body.classList.remove(oldClass);
        }
        if (!body.classList.contains(newClass)) {
            body.classList.add(newClass);
        }
    }

    // Set initial theme based on time
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        switchTheme("day", "night");
    } else {
        switchTheme("night", "day");
    }

    // Expose the toggle function to the global window object
    window.toggleTheme = function() {
        const currentTheme = body.classList.contains("day") ? "day" : "night";
        const newTheme = currentTheme === "day" ? "night" : "day";
        switchTheme(newTheme, currentTheme);
    };

    // Listen to click events for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
