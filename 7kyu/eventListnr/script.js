'use strict';

let list = document.querySelector('ul');
let div = document.querySelector('div h1');

list.addEventListener('click', (event) => {
    let target = event.target;

    if(target.tagName == 'LI') {
        div.innerHTML = target.innerHTML;
    }   else return

})



