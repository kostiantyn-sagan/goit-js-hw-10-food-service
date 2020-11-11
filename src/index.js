import {
  themeSwitchCheckboxEl,
  onThemeSwitchChange,
  useSelectedTheme,
} from './js/theme';
import menuItemTpl from './templates/menu-item.hbs';
import menu from './js/menu.json';

themeSwitchCheckboxEl.addEventListener('change', onThemeSwitchChange);

const selectedTheme = localStorage.getItem('theme');

if (selectedTheme) {
  useSelectedTheme(selectedTheme);
}

const menuList = document.querySelector('ul.js-menu');
const itemsMarkup = createMenuItemsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', itemsMarkup);

function createMenuItemsMarkup(menu) {
  return menu.map(menuItemTpl).join('');
}
