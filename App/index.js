// This is my first javascript code
console.log('Hello World');

let person = {
    name: 'Mosh',
    age: 30
};

person.name = 'John';
person['age'] = 15;
console.log(person);

let arrayOfPeople = ['yes'];
arrayOfPeople[3] = false;
arrayOfPeople[7] = "fire";
arrayOfPeople[1] = person;

console.log(arrayOfPeople);
console.log( true + 6 + 'haha');
typeof(arrayOfPeople);

draggable = new PlainDraggable(document.getElementById('draggable'));