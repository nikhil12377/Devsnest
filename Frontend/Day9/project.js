const box = document.querySelectorAll(".box");
const seats = document.querySelector(".seats");
const rseats = document.querySelector(".rseats");
var count = 0;
var rcount = 100;
box.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.classList.contains('change-color')) {
            link.classList.remove('change-color');
            count++;
            rcount--;
            seats.textContent = count;
            rseats.textContent = rcount;
        }
        else {
            link.classList.add('change-color');
            count--;
            rcount++;
            seats.textContent = count;
            rseats.textContent = rcount;
        }
    })
})




