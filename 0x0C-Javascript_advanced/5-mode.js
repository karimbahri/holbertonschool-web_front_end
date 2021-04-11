'use strict';
const body = document.body;
const changeMode = function(size, weight, transform, background, color) {
    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
}
const main = function() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const newP = document.createElement('p');
    const content = document.createTextNode('Welcome Holberton!');
    newP.appendChild(content);
    body.appendChild(newP);

    const spookyEl = document.createElement('button');
    spookyContent = createTextNode('spooky');
    spookyEl.appendChild(spookyContent);
    spookyEl.id = 'spooky';
    

    const dark = document.createElement('button');
    darkContent = createTextNode('dark mode');
    dark.appendChild(darkContent);
    dark.id = 'dark';


    const scream = document.createElement('button');
    screamContent = createTextNode('Scream mode');
    scream.appendChild(ScreamContent);
    scream.id = 'scream';

    body.appendChild(spookyEl);
    body.appendChild(dark);
    body.appendChild(scream);

    document.getElementById('spooky').addEventListener('click', spooky);
    document.getElementById('dark').addEventListener('click', darkMode);
    document.getElementById('scream').addEventListener('click', screamMode);
}
main();
