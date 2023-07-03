import members from './members.js';

const membersDOM = document.querySelector('#members');

members.forEach(m=>{
    membersDOM.innerHTML += `<a href="./members/${m.name}">${m.name}</a>`
})