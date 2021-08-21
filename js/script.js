'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
} */

hearts.forEach(item => {
    item.style.backgroundColor = "green";
});

const div = document.createElement('div');
//const text = document.createTextNode('text');

div.classList.add('black');

wrapper.prepend(div);
//hearts[0].after(div);
//circles[0].remove();

//hearts[0].replaceWith(circles[0]);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = "Hello";

div.insertAdjacentHTML(' ', '<h2>Hello</h2>');