// Get references to the DOM elements
var generateResumeButton = document.getElementById('generateResumeBtn');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var skillsInput = document.getElementById('skills');
var resumeName = document.getElementById('resumeName');
var resumeEmail = document.getElementById('resumeEmail');
var resumeSkills = document.getElementById('resumeSkills');
// Event listener for the "Generate Resume" button
generateResumeButton.addEventListener('click', function () {
    // Get values from the input fields
    var name = nameInput.value;
    var email = emailInput.value;
    var skills = skillsInput.value;
    // Check if inputs are not empty before updating the resume
    if (name && email && skills) {
        // Update the resume sections
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumeSkills.textContent = skills;
        // Optional: Show a message indicating the resume was generated
        alert('Your resume has been generated!');
    }
    else {
        // If inputs are empty, alert the user
        alert('Please fill in all fields before generating the resume.');
    }
});
