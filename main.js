// Mobile menu toggle
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

// Close menu when clicking a link (optional)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('active');
  });
});