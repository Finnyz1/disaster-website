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

    // Initialize EmailJS with your Public Key
    emailjs.init("mAUk-bA5vxi5cEbh4"); // Replace with your actual Public Key

    // Select the form and listen for submit
    document.getElementById("infoForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents default form submission

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        // Create object to send
        let params = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Send email via EmailJS
        emailjs.send("service_3g3wtio", "template_u040kdv", params)
            .then(function(response) {
                alert("Message Sent Successfully!");
                document.getElementById("infoForm").reset(); // Clear form after submission
            }, function(error) {
                alert("Failed to send message. Please try again.");
            });
    });
});
