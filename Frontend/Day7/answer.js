var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 2,
}

// first program
for (let item in student) {
    console.log(item);
}

// second program
console.log(student);
delete student.rollno;
console.log(student);

// third program
let size = 0;
for (let item in student) {
    size++;
}
console.log(size);

// forth program
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

library.map((e) => {
    console.log(e.readingStatus);
});

// fifth program
class volumeOfCylinder {
    constructor(r, h) {
        this.r = r;
        this.h = h;
        this.volume = ((3.14) * (Math.pow(r, 2)) * (h));
        console.log(this.volume.toFixed(4));
    }
};
volumeOfCylinder.r = 10;
volumeOfCylinder.h = 10;
var a = new volumeOfCylinder(2, 3);

// sixth program
var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort((a, b) => b.libraryID - a.libraryID);
// console.log(library);