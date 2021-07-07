var frame = document.querySelectorAll(".frame");

let flippedCard = false;
let fCard, sCard;
let count = 0
function flipCard() {
    if (this === fCard) {
        return;
    }


    this.classList.add("flip");
    if (!flippedCard) {
        flippedCard = true;
        fCard = this;
        return;
    }

    sCard = this;
    Match();
}

function Match() {
    if (fCard.dataset.framework === sCard.dataset.framework) {
        count++;
        fCard.removeEventListener('click', flipCard);
        sCard.removeEventListener('click', flipCard);
        [flippedCard, lockBoard] = [false, false];
        [fCard, sCard] = [null, null];
    }
    else {

        setTimeout(() => {
            fCard.classList.remove('flip');
            sCard.classList.remove('flip');

            [flippedCard, lockBoard] = [false, false];
            [fCard, sCard] = [null, null];
        }, 1000);
    }

    // automatically restart the game
    if (count === 3) {
        setTimeout(() => {
            frame.forEach((i) => {
                i.classList.remove('flip');

            })

            [flippedCard, lockBoard] = [false, false];
            [fCard, sCard] = [null, null];
        }, 1500);
    }
}

(function shuffle() {
    frame.forEach((i) => {
        let ord = Math.floor(Math.random() * 6);
        i.style.order = ord;

    });
})();

frame.forEach((i) => {
    i.addEventListener('click', flipCard);

})




