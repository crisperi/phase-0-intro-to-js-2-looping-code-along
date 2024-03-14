function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

function createCard(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you ${names[i]} for the ${eventName} gift`);
    }
    return thankYouMessages;
}

const cards = createCard(['EDIAN', 'DAN', 'NASHVILLE'], 'wedding');
console.log(cards.join('\n'));

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGifts(gifts);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);
