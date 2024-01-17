document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add animation or interaction
            card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', () => {
            // Remove animation or interaction
            card.style.boxShadow = 'none';
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
    });
      const profileImage = document.getElementById('profile-image');

    // Add the "fade-in" class to trigger the animation
    profileImage.classList.add('fade-in');

    // Remove the "fade-in" class after the animation is complete
    profileImage.addEventListener('animationend', function() {
        profileImage.classList.remove('fade-in');
    });
});



window.addEventListener('click', closeModalOnOutsideClick);
window.addEventListener('touchstart', closeModalOnOutsideClick);

function closeModalOnOutsideClick(event) {
    let modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeModal();
    }
}


function openModal() {
    let modal = document.getElementById("resumeModal");
    let modalContent = modal.querySelector('.modal-content');

    modal.style.display = "block";
    modal.style.animation = 'fadeIn 0.3s'; // Apply fadeIn animation
    modal.offsetHeight; // Trigger reflow to restart animation
    modal.style.animation = null;

    modalContent.style.animation = 'popIn 0.3s'; // Apply popIn animation
    modalContent.offsetHeight; // Trigger reflow to restart animation
    modalContent.style.animation = null;
}

function closeModal() {
    let modal = document.getElementById("resumeModal");
    let modalContent = modal.querySelector('.modal-content');

    modal.style.animation = 'fadeOut 0.3s'; // Apply fadeOut animation
    modal.offsetHeight; // Trigger reflow to restart animation

    modal.style.display = "none";
    modal.style.animation = null;

    modalContent.style.animation = 'popOut 0.3s'; // Apply popOut animation
    modalContent.offsetHeight; // Trigger reflow to restart animation
    modalContent.style.animation = null;
}

