// Get references to the DOM elements
const generateResumeButton = document.getElementById('generateResumeBtn') as HTMLButtonElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;

const resumeName = document.getElementById('resumeName') as HTMLElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;

// Event listener for the "Generate Resume" button
generateResumeButton.addEventListener('click', () => {
    // Get values from the input fields
    const name = nameInput.value;
    const email = emailInput.value;
    const skills = skillsInput.value;

    // Check if inputs are not empty before updating the resume
    if (name && email && skills) {
        // Update the resume sections
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumeSkills.textContent = skills;

        // Optional: Show a message indicating the resume was generated
        alert('Your resume has been generated!');
    } else {
        // If inputs are empty, alert the user
        alert('Please fill in all fields before generating the resume.');
    }
});


