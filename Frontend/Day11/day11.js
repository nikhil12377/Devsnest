class question {
    constructor() {
        this.questions = [
            {
                q: "1. The Worlds Largest desert is?",
                op1: " Thar",
                op2: " Kalahari",
                op3: " Sahara",
                op4: " Sonoran",
                a: " Sahara",
                name: "a"
            },
            {
                q: "2. Mount Everest is located in?",
                op1: " India",
                op2: " Nepal",
                op3: " Tibet",
                op4: " China",
                a: " Nepal",
                name: "b"
            },
            {
                q: "3. The gas used for making vegetables is?",
                op1: " Oxygen",
                op2: " Carbon dioxide",
                op3: " Hydrogen",
                op4: " Nitrogen",
                a: " Hydrogen",
                name: "c"
            },
            {
                q: "4. Country that was called as Land of Rising Sun?",
                op1: " Russia",
                op2: " Japan",
                op3: " Korea",
                op4: " Holland",
                a: " Japan",
                name: "d"
            },
        ]
    }
}


var quiz = document.querySelector(".quiz");


// class answer extends question {


question.prototype.start = function () {
    for (var i = 0; i < 4; i++) {
        quiz.innerHTML += `<h1> ${(this.questions[i].q)} </h1>
            <label style="font-size: 30px"><input type="radio" name="${this.questions[i].name}" value="${this.questions[i].op1}" />${this.questions[i].op1}</label
            ><br />
            <label style="font-size: 30px"><input type="radio" name="${this.questions[i].name}" value="${this.questions[i].op2}"/>${this.questions[i].op2}</label
            ><br />
            <label style="font-size: 30px"
              ><input type="radio" class="correct1" name="${this.questions[i].name}" value="${this.questions[i].op3}"/>${this.questions[i].op3}</label
            ><br />
            <label style="font-size: 30px"><input type="radio" name="${this.questions[i].name}" value="${this.questions[i].op4}"/>${this.questions[i].op4}</label
            ><br />`
    }



    var score = document.querySelector("#score");
    var count = 0;
    var hid = document.querySelector(".hid");
    score.addEventListener('click', () => {

        for (i = 0; i < 4; i++) {
            let nam = this.questions[i].name;
            var radios = document.getElementsByName(nam);
            for (j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value === this.questions[i].a && radio.checked) {
                    count++;
                }
            }
        }
        hid.innerHTML = `<button id="scor">${count}/4</button>`
        count = 0;
    })
}

const obj = new question();
obj.start();

