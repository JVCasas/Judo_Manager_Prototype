const mainMenu = new BurgerMenu('#menu-button', '#menu-options');
const mainCarrousel = new Carroussel('.carrousel-track-horizontal', '.carrousel-item', 5000, 'X');
mainCarrousel.addButtons('carrousel-next-button', 'carrousel-previous-button');
const secondaryCarrousel = new Carroussel('.carrousel-track-vertical', '.carrousel-item', 5000, 'Y')
secondaryCarrousel.addButtons('carrousel-next-button', 'carrousel-previous-button');