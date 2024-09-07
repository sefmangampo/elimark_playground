const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionContainers = document.querySelectorAll('.accordion-container');

    accordionContainers.forEach(container => {
        container.addEventListener('click', () => {
            const content = container.nextElementSibling;
            const arrow = container.querySelector('.accordion-arrow');

            // Close all other accordion items
            accordionContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    const otherContent = otherContainer.nextElementSibling;
                    const otherArrow = otherContainer.querySelector('.accordion-arrow');
                    otherContainer.classList.remove('active');
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = null;
                    otherArrow.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle the clicked accordion item
            container.classList.toggle('active');
            content.classList.toggle('active');
            arrow.style.transform = container.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});