// themeToggle.js

export function initializeTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleDarkTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

export function isDarkTheme() {
  return document.documentElement.classList.contains('dark');
}