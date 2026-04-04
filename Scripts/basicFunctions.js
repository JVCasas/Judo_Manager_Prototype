const menuButton = document.getElementById('menu-button');
const menu       = document.getElementById('menu-options');

function activeHiddenBars(bar)
{
    bar.classList.toggle('active');
}

menuButton.addEventListener('click', () => {activeHiddenBars(menu)});