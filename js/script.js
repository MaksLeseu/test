
const btn = document.getElementById('btn');
const divElem = document.getElementsByClassName('elem')[0];

btn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.classList.add('styleElement');
    divElem.appendChild(newElement);
});

