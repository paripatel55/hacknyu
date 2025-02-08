// Function to start the story
function startGame() {
    // Hide the start button once clicked
    document.querySelector('#start-button').style.display = 'none';
    
    // Show the first story bubble at the bottom of the screen
    document.getElementById('bubble1').style.display = 'block';
    
    // Start the typing effect for the first bubble
    typeStory("Welcome to the game! You will face a series of choices where you must avoid scams. Let's begin your adventure!");
}

// Function to type out story text with a typewriter effect
function typeStory(text) {
    const storyText = document.getElementById('story-text');
    let index = 0;
    storyText.innerHTML = ''; // Clear the text initially

    function typingEffect() {
        if (index < text.length) {
            storyText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typingEffect, 50); // Delay between characters
        } else {
            // Once typing is done, show the options
            showOptions(); 
        }
    }

    typingEffect(); // Start the typing effect
}

// Function to show the options after typing is complete
function showOptions() {
    // Show the options buttons
    document.querySelector('.start-options').style.display = 'block';
}

// Function to handle the player's choices
function chooseOption(option) {
    const storyText = document.getElementById('story-text');
    
    if (option === 1) {
        storyText.innerHTML = ""; // Clear existing text
        typeStory("You head to the store, but watch out for scams!");
        // Change the background image to represent the store
        document.body.style.backgroundImage = "url('store-image.jpg')";
    } else if (option === 2) {
        storyText.innerHTML = ""; // Clear existing text
        typeStory("You check your phone... Is that a scam message?");
        // Change the background image to represent a phone check
        document.body.style.backgroundImage = "url('phone-image.jpg')";
    }
    
    // Hide the options after making a choice
    document.querySelector('.start-options').style.display = 'none';
}


