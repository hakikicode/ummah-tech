// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is loaded and ready to go!');

  // Navigation buttons
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        return;
      }
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Placeholder for button functionalities
  document.querySelectorAll('.join, .contribute, .join-create').forEach(button => {
    button.addEventListener('click', function() {
      alert('This functionality will be implemented soon!');
    });
  });

  // Connect Wallet functionality
  document.getElementById('connect-wallet').addEventListener('click', () => {
    alert('Connect Wallet functionality will be implemented soon!');
  });
});
