import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const handleToggleNav = (el) => {
  document.querySelector(el).addEventListener('click', () => {
    const isOpen = document.body.classList.contains('open');

    if (isOpen) {
      document.body.classList.remove('open');
    } else {
      document.body.classList.add('open');
    }
  });
};
handleToggleNav('.menu-toggle');
handleToggleNav('.banner__util-close');
// document.querySelector('#nav-button').addEventListener('click', () => {
//   const isOpen = document.body.classList.contains('open');

//   if (isOpen) {
//     document.body.classList.remove('open');
//   } else {
//     document.body.classList.add('open');
//   }
// });
