document.getElementById('clickButton').addEventListener('click', function() {
    alert("Hello! Thanks for clicking.");
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Message sent from ${name}! We'll reply to ${email} shortly.`);
        // Here you can handle sending the message to a server if desired
    } else {
        alert("Please fill out all fields.");
    }
});
