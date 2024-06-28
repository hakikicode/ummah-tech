document.querySelectorAll('.contribute').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'fundraising.html';
  });
});

document.querySelectorAll('.join').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'community.html';
  });
});

document.querySelectorAll('.join-create').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'project.html';
  });
});
document.querySelectorAll('.join-create').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'create.html'; // Link to create.html page
  });
});
