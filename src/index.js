import './styles.css';
import template from './templates/gallery-item.hbs';
import foods from './menu.json';

const markup = template(foods);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
