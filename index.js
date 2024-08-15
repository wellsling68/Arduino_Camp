const sunMoonContainer = document.querySelector('.sun-moon-container');

// Function to apply the theme with optional transition delay
function applyTheme(theme, withTransitionDelay = true) {
  if (withTransitionDelay) {
    document.body.style.setProperty('--transition-delay', '1s');
  } else {
    document.body.style.setProperty('--transition-delay', '0s');
  }
  document.body.classList.toggle('light', theme === 'light');
  
  const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
  sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
}

// Check for saved theme in localStorage on page load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to 'dark' if no theme is saved
  applyTheme(savedTheme, false); // Apply theme without transition delay on page load
};

// Toggle theme and save preference in localStorage
document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  const newTheme = isLight ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  
  applyTheme(newTheme, true); // Apply theme with transition delay on toggle
});
