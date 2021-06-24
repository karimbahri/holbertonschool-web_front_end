'use strict';
const stock = {
    macbook: 2,
    iphone: 4
}

const processPayment = function (itemName) {
    stock[itemName]--;
    console.log(`Payment is being processed for item ${itemName}`);
}
const processError = function (itemName) {
    console.log(`No more ${itemName} in stock
Payment is not being processed`);
}

const processOrder = function (itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (!(stock[itemName]))
        callbackError(itemName);
    else
        callbackPayment(itemName);
}


const itemName = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(itemName, processPayment, processError);