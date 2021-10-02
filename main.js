let indexCard = 0;

function cardPrev() {
    const cards = document.querySelectorAll(".content");


    cards.forEach(card => {
        card.style.display = 'none';
    });

    if (indexCard === 0) {
        indexCard = cards.length - 1;
    } else {
        indexCard = indexCard - 1;
    }

    cards[indexCard].style.display = 'flex';
}

function cardNext() {
    const cards = document.querySelectorAll(".content");
    const ultimoCard = cards.length - 1;

    cards.forEach(card => {
        card.style.display = 'none';
    });

    if (indexCard === ultimoCard) {
        indexCard = 0;
    } else {
        indexCard = indexCard + 1;
    }

    cards[indexCard].style.display = "flex";
}