var burgers = document.getElementsByClassName('burgers')[0];
var labeel = document.getElementById('labeel');
burgers.addEventListener('click', () => burgers.classList.toggle('open'));
burgers.addEventListener('click', () => document.getElementsByClassName('container')[0].classList.toggle('inverti'));
// labeel.addEventListener('click', () => burgers.classList.toggle('open'));
// labeel.addEventListener('click', () => document.getElementById('menu').classList.toggle('shownav'));