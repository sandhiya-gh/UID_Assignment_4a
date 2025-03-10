document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const dobInput = document.getElementById("dob");
    const ageInput = document.getElementById("age");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const output = document.getElementById("output");

    // Automatically calculate age when date of birth is selected
    dobInput.addEventListener("change", function () {
        const dob = new Date(dobInput.value);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        ageInput.value = age;
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        output.innerHTML = ""; // Clear previous messages

        // Form validation
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.querySelector("input[type=email]").value.trim();
        const position = document.querySelector("input[name='position']:checked");
        const languages = document.querySelectorAll("input[type=checkbox]:checked");

        if (!firstName || !lastName || !email || !dobInput.value || !position || languages.length === 0) {
            output.innerHTML = "<span style='color:red;'>Please fill all fields and select at least one programming language.</span>";
            return;
        }

        if (password.value !== confirmPassword.value) {
            output.innerHTML = "<span style='color:red;'>Passwords do not match!</span>";
            return;
        }

        // Display user input (for demonstration purposes)
        output.innerHTML = `
            <strong>Application Submitted Successfully!</strong><br>
            Name: ${firstName} ${lastName} <br>
            Date of Birth: ${dobInput.value} <br>
            Age: ${ageInput.value} <br>
            Email: ${email} <br>
            Position: ${position.nextSibling.textContent.trim()} <br>
            Programming Languages: ${Array.from(languages).map(lang => lang.nextSibling.textContent.trim()).join(", ")} 
        `;
        output.style.color = "green";
    });
});