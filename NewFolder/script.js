document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents closing immediately

            // Hide all dropdowns first
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== this.querySelector(".dropdown-menu")) {
                    menu.style.display = "none";
                }
            });

            // Toggle the current dropdown
            let menu = this.querySelector(".dropdown-menu");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.style.display = "none";
        });
    });
});
