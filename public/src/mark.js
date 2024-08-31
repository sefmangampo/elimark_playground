const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.accordion-title').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Close all other accordion items
        document.querySelectorAll('.accordion-title').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = null;
            }
        });
        
        // Toggle the clicked accordion item
        button.classList.toggle('active');
        content.classList.toggle('active');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});