// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation (optional)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Process the form data (you can send the data to a server here)
    console.log("Form submitted successfully:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Display a confirmation message or reset the form
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    document.getElementById("contact-form").reset(); // Reset the form fields
});

// JavaScript for adjusting padding-top based on header size
window.addEventListener("load", function () {
    // Get the height of the fixed header
    const headerHeight = document.querySelector("header").offsetHeight;

    // Set padding-top for the body dynamically to prevent content from being hidden under the fixed header
    document.body.style.paddingTop = `${headerHeight}px`;

    // Adjust padding on window resize for dynamic changes
    window.addEventListener("resize", function () {
        document.body.style.paddingTop = `${document.querySelector("header").offsetHeight}px`;
    });
});
