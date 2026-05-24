document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.getElementById('hamburger-menu');
  const closeIcon = document.getElementById('close-icon');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const isActive = navMenu.classList.contains('active');
    hamburgerIcon.style.display = isActive ? 'none' : 'block';
    closeIcon.style.display = isActive ? 'block' : 'none';
  });
});
