function passwordPrompt() {
    const correctPassword = "ilovecoding"; 
    let userPassword;

    do {
        userPassword = prompt("Enter your password:");
    } while (userPassword !== correctPassword);

    console.log("Success! You have entered the correct password.");
}

passwordPrompt();
