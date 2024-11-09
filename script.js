// Get references to the DOM elements
var generateResumeButton = document.getElementById('generateResumeBtn');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var resumeName = document.getElementById('resumeName');
var resumeEmail = document.getElementById('resumeEmail');
var resumeSkills = document.getElementById('resumeSkills');
// Check if the elements exist before proceeding
if (generateResumeButton && nameInput && emailInput && skillsInput && resumeName && resumeEmail && resumeSkills) {
    // Event listener for the "Generate Resume" button
    generateResumeButton.addEventListener('click', function () {
        // Get values from the input fields and trim any extra spaces
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var skills = skillsInput.value.trim();
        // Check if inputs are not empty before updating the resume
        if (name && email && skills) {
            // Basic email format validation
            if (!email.includes('@') || !email.includes('.')) {
                alert('Please enter a valid email address.');
                return;
            }
            // Update the resume sections
            if (resumeName && resumeEmail && resumeSkills) {
                resumeName.textContent = name;
                resumeEmail.textContent = email;
                resumeSkills.textContent = skills;
            }
            // Show a message indicating the resume was generated
            alert('Your resume has been generated!');
        }
        else {
            // If inputs are empty, alert the user
            alert('Please fill in all fields before generating the resume.');
        }
    });
}
else {
    // If any of the DOM elements are missing, log an error
    console.error('Some DOM elements are missing.');
}
