export const themeSwitchCheckboxEl = document.querySelector(
  '#theme-switch-toggle',
);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export function onThemeSwitchChange() {
  const isLightTheme = document.body.classList.contains(Theme.LIGHT);
  const isDarkTheme = document.body.classList.contains(Theme.DARK);
  const isDefaultTheme = !document.body.hasAttribute('class');

  if (isLightTheme || isDefaultTheme) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }

  if (isDarkTheme) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export function useSelectedTheme(selectedTheme) {
  document.body.classList.add(selectedTheme);

  if (selectedTheme === Theme.DARK) {
    themeSwitchCheckboxEl.checked = true;
  }
}
