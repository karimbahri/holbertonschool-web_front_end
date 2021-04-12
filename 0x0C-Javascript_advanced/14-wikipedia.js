'use strict';
const createElement = function(data) {
    const p = document.createElement('p');
    p.innerText(data);
    document.querySelector('body').appendChild(p);
}
const queryWikipedia = function(callback) {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xmlReq.send();
    callback(JSON.parse(xmlReq.responseText).query.pages[21721040].extact);
}
// test
queryWikipedia(createElement);
