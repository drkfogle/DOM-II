// Your code goes here
const content_txt = document.querySelector('.text-content')
content_txt.addEventListener('mouseover', e => {console.log('it works');
content_txt.style.color = 'green'
});

const scroll_tector = window.addEventListener('scroll', e => {
    document.getElementById('container').innerHTML = window.pageYOffset + 'px';
});

const new_a = document.createElement('a');
new_a.textContent = 'hello';
const home = document.querySelector('nav')
home.appendChild(new_a);
new_a.setAttribute('id', 'container');


const color_flip = document.querySelector('.content-destination')
color_flip.addEventListener('click', e => {color_flip.style.color = 'green'
e.stopPropagation()
});

const img_flip = document.querySelector('.img-fluid')
img_flip.addEventListener('mouseover', () => {console.log('success')
TweenMax.to(img_flip, 4, {ease:Bounce.easeOut, delay:2});
});

const nav_color = document.querySelectorAll('.p')
nav_color.addEventListener('mouseup', () =>{console.log('good');
    nav_color[0].target.textContent = 'poop';
});

