const obj1 = document.querySelector(".obj1");
const obj2 = document.querySelector(".obj2");
const obj3 = document.querySelector(".obj3");
const obj4 = document.querySelector(".obj4");
const obj5 = document.querySelector(".obj5");
const obj6 = document.querySelector(".obj6");
const nam = document.querySelector(".name");

obj1.addEventListener('click', () => {
    obj1.style.background = "red";

})

obj2.addEventListener('dblclick', () => {
    obj2.style.background = "peru";

})

obj3.addEventListener('drag', () => {
    obj3.textContent = "Already dragged";
})

obj4.addEventListener('mouseover', () => {
    obj4.textContent = "Already Hovered";
})

document.addEventListener('keypress', (e) => {
    obj5.textContent = `You Pressed ${e.code}`;
})

document.addEventListener('keyup', (e) => {
    alert(`You Pressed ${e.code}`)
})

nam.addEventListener('focus', () => {
    nam.style.background = "red"
})

nam.addEventListener('blur', () => {
    nam.style.background = "green"
})

function mousewheel() {
    obj6.style.fontSize = "50px"
}

