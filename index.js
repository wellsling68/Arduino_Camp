const chk = document.getElementById('chk');

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light');
        chk.checked = true;
    } else {
        document.body.classList.remove('light');
        chk.checked = false;
    }
}

// Event listener for the checkbox
chk.addEventListener('change', () => {
    if (chk.checked) {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
});

// On page load, apply the theme based on the stored preference
const storedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(storedTheme);
