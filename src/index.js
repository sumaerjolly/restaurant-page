import homePage from './homepage';
import tabs from './tabs';
import menu from './menu';
import about from './about';
import './style.css';

document.body.appendChild(tabs());
document.body.appendChild(homePage());
const navbar = document.querySelector('#navbar');
const links = navbar.childNodes;
links[0].addEventListener('click', homePage, false);
links[1].addEventListener('click', menu, false);
links[2].addEventListener('click', about, false);
