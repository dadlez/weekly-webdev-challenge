import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  const arr = [1, 2, 3, 4];
  forms.forEach(element => element.addEventListener('submit', (e) => {
    e.preventDefault();
  }));
});