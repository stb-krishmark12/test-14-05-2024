const numbers = [1, 1, 2, 3, 5];
const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const result1 = numbers.map(num => num + 5);

const result2 = words.map(word => word.slice(0, -1));
const result3 = words.map(word => word.charAt(0));
const result4 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
const result5 = pets.filter(pet => pet.length <= 5);
const result6 = pets.filter(pet => pet.startsWith("t"));

const result7 = numbers.filter(num => num > 4);
const result8 = numbers.filter(num => num % 2 === 0);

console.log("result1 = "+ result1);
console.log("result2 = "+ result2);
console.log("result3 = "+ result3);
console.log("result4 = "+ result4);
console.log("result5 = "+ result5);
console.log("result6 = "+ result6);
console.log("result7 = "+ result7);
console.log("result8 = "+ result8);



