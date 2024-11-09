// Get references to the DOM elements
const generateResumeButton = document.getElementById('generateResumeBtn') as HTMLButtonElement | null;
const nameInput = document.getElementById('name') as HTMLInputElement | null;
const emailInput = document.getElementById('email') as HTMLInputElement | null;
const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
const resumeName = document.getElementById('resumeName') as HTMLElement | null;
const resumeEmail = document.getElementById('resumeEmail') as HTMLElement | null;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement | null;

// Check if the elements exist before proceeding
if (generateResumeButton && nameInput && emailInput && skillsInput && resumeName && resumeEmail && resumeSkills) {
    // Event listener for the "Generate Resume" button
    generateResumeButton.addEventListener('click', function () {
        // Get values from the input fields and trim any extra spaces
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const skills = skillsInput.value.trim();

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
        } else {
            // If inputs are empty, alert the user
            alert('Please fill in all fields before generating the resume.');
        }
    });
} else {
    // If any of the DOM elements are missing, log an error
    console.error('Some DOM elements are missing.');
}
