import 'core-js/stable';
import 'regenerator-runtime/runtime';

document.querySelector('#nav-button').addEventListener('click', () => {
  const isOpen = document.body.classList.contains('open');

  if (isOpen) {
    document.body.classList.remove('open');
  } else {
    document.body.classList.add('open');
  }
});

if (module.hot) {
  module.hot.accept();
}
