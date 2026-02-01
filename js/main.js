const warningKnoppen = document.querySelectorAll('.close-warning');
warningKnoppen.forEach(knop => {
    knop.addEventListener('click', () => {
        const waarschuwing = knop.parentElement;
        waarschuwing.style.display = 'none';
    });
});