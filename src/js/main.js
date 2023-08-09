import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

document.querySelector('#nav-button').addEventListener('click', () => {
  const isOpen = document.body.classList.contains('open');

  if (isOpen) {
    document.body.classList.remove('open');
  } else {
    document.body.classList.add('open');
  }
});

const testJS = function () {
  console.log('Here we go!');
};
testJS();
