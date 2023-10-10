# Answer to the questions given in the questions_and_answers.md file
1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer
Answer: C: undefined
Write your explanation here: there is no value 
2. 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer
Answer: C: "12"
Write your explanation here: JavaScript is a dynamically typed language, and it will perform type coercion when you use the + operator with different data types. In this case, the sum function is called with the arguments 1 (a number) and "2" (a string). JavaScript will convert the number 1 to a string and then concatenate it with the string "2", resulting in the string "12". Finally, if you use the + operator with two strings, it performs concatenation, so "12" will be concatenated, resulting in the string "12". Therefore, the correct answer is 3, but it will be treated as a string, so the output will be "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer
Answer: A: ['🍕', '🍫', '🥑', '🍔']
Write your explanation here:In the code, info.favoriteFood initially references the first element of the food array, which is "🍕". Later, you assign the string "🍝" to info.favoriteFood, but this assignment only changes the value of info.favoriteFood, not the original food array. Therefore, when you log the food array, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer
The correct answer is B: Hi there, undefined.

Explanation: In the sayHi function, there's a parameter name, but when you call the function using sayHi(), you don't provide an argument for name. In JavaScript, when a function is called without an argument for a parameter, that parameter takes the value undefined. So, ${name} in the template literal evaluates to undefined, resulting in the output Hi there, undefined.

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer
The correct answer is B: 2.

Explanation: The forEach method iterates over each element in the nums array. In the callback function, the condition if (num) checks if the current element num is truthy (not equal to 0 in this case, as 0 is a falsy value in JavaScript). Only the elements 1, 2, and 3 are truthy, so the count variable is incremented for each of those values. Therefore, count ends up being 2, and the output is 2.


# live link: https://652536a1ce4de51739e37960--relaxed-tiramisu-f30aac.netlify.app/
code link:https://github.com/programming-hero-web-course-4/b8a9-event-management-iamtanim0195