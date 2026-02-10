// 50 Javascript quiz questions
const quizQuestions = [
    // NOVICE LEVEL QUESTIONS
    {
        id: 1,
        question: "What is the best way to declare a variable in Javascript?",
        options: ["var myVar = 10;", "variable myVar = 10;", "v myVar = 10;", "int myVar = 10;"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 2,
        question: "Which of the following is NOT a Javascript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correct: 2,
        difficulty: "novice"
    },
    {
        id: 3,
        question: "What does 'console.log()' do in Javascript?",
        options: ["Creates a new variable", "Prints output to the console", "Declares a function", "Defines an object"],
        correct: 1,
        difficulty: "novice"
    },
    {
        id: 4,
        question: "Which symbol is used for single line comments in Javascript?",
        options: ["//", "/*", "#", "<!--"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 5,
        question: "What is the result of: 2 + '2' in Javascript?",
        options: ["4", "22", "NaN", "Error"],
        correct: 1,
        difficulty: "novice"
    },
    {
        id: 6,
        question: "Which method is used to add an element to the end of an array in Javascript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 7,
        question: "What keyword is used to create a function in Javascript?",
        options: ["def", "function", "func", "method"],
        correct: 1,
        difficulty: "novice"
    },
    {
        id: 8,
        question: "Which operator is used to compare both value and type?",
        options: ["==", "=", "===", "!="],
        correct: 2,
        difficulty: "novice"
    },
    {
        id: 9,
        question: "What is the correct way to create an array in Javascript?",
        options: ["let arr = [];", "let arr = new Array();", "let arr = Array();", "All of the above"],
        correct: 3,
        difficulty: "novice"
    },
    {
        id: 10,
        question: "Which method converts a string to lowercase?",
        options: ["toLowerCase()", "toUpperCase()", "lowercase()", "uppercase()"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 11,
        question: "What is the correct syntax for an IF statement?",
        options: ["if x == 5 then", "if (x == 5)", "if x = 5", "if (x = 5)"],
        correct: 1,
        difficulty: "novice"
    },
    {
        id: 12,
        question: "Which event occurs when a user clicks on an HTML element?",
        options: ["onclick", "onload", "onmouseover", "onfocus"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 13,
        question: "What does 'NaN' stand for in Javascript?",
        options: ["Not a Number", "Null and Null", "Not a Name", "Number and Number"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 14,
        question: "Which method is used to remove the last element from an array in Javascript?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correct: 0,
        difficulty: "novice"
    },
    {
        id: 15,
        question: "What is the result of: typeof null in Javascript?",
        options: ["null", "object", "undefined", "string"],
        correct: 1,
        difficulty: "novice"
    },

    // INTERMEDIATE LEVEL QUESTIONS
    {
        id: 16,
        question: "What will be the output: console.log(0.1 + 0.2 == 0.3)?",
        options: ["true", "false", "NaN", "undefined"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 17,
        question: "Which method is used to combine two or more arrays?",
        options: ["concat()", "merge()", "combine()", "join()"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 18,
        question: "What is a closure in Javascript?",
        options: ["A function that has access to its own scope", "A function that has access to the parent scope", "A function that has access to the global scope", "All of the above"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 19,
        question: "What does 'use strict' do in Javascript?",
        options: ["Enables strict mode", "Disables strict mode", "Enables debugging mode", "Disables debugging mode"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 20,
        question: "What of these is NOT a way to create an object?",
        options: ["Object.create()", "Object.assign()", "Object.defineProperty()", "Object.freeze()"],
        correct: 3,
        difficulty: "intermediate"
    },
    {
        id: 21,
        question: "What is the difference between 'let' and 'var'?",
        options: ["'let' is block scoped, 'var' is function scoped", "'var' is block scoped, 'let' is function scoped", "'let' and 'var' are the same", "None of the above"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 22,
        question: "What will console.log(typeof []) output?",
        options: ["array", "object", "undefined", "string"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 23,
        question: "Which method is used to parse a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.fromString()"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 24,
        question: "What is the output: console.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "NaN"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 25,
        question: "What does the 'this' keyword refer to in Javascrpt?",
        options: ["The current function", "The global object", "The object that is executing the current function", "None of the above"],
        correct: 2,
        difficulty: "intermediate"
    },
    {
        id: 26,
        question: "Which ES6 feature allows default parameter values?",
        options: ["Arrow functions", "Template literals", "Default parameters", "Destructuring"],
        correct: 2,
        difficulty: "intermediate"
    },
    {
        id: 27,
        question: "What is event bubbling in JavaScript?",
        options: ["A way to stop event propagation", "The process by which an event starts at the most specific element and then flows outward to less specific elements", "A method to create custom events", "A technique to handle multiple events at once"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 28,
        question: "Which method creates a new array with results of calling a function for every element?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 29,
        question: "What is the correct way to check if a variable is an array?",
        options: ["Array.isArray(variable)", "variable instanceof Array", "variable.constructor === Array", "All of the above"],
        correct: 3,
        difficulty: "intermediate"
    },
    {
        id: 30,
        question: "What does the spread operator (...) do?",
        options: ["Copies an array or object", "Expands an array or object into its elements", "Merges two arrays", "None of the above"],
        correct: 1,
        difficulty: "intermediate"
    },
    {
        id: 31,
        question: "What is a Promise in JavaScript?",
        options: ["A way to handle asynchronous operations", "A function that returns a value", "An object that represents the eventual completion of an asynchronous operation", "Both A and C"],
        correct: 3,
        difficulty: "intermediate"
    },
    {
        id: 32,
        question: "What will be logged: console.log([] == ![])?",
        options: ["true", "false", "undefined", "NaN"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 33,
        question: "Which method stops event propagation?",
        options: ["stopPropagation()", "preventDefault()", "stopImmediatePropagation()", "None of the above"],
        correct: 0,
        difficulty: "intermediate"
    },
    {
        id: 34,
        question: "What is the purpose of the 'async' keyword?",
        options: ["To declare an asynchronous function", "To make a function run in the background", "To allow the use of 'await' inside the function", "All of the above"],
        correct: 3,
        difficulty: "intermediate"
    },
    {
        id: 35,
        question: "What does the 'new' keyword do?",
        options: ["Creates a new object", "Creates a new instance of a constructor function", "Calls a constructor function", "All of the above"],
        correct: 1,
        difficulty: "intermediate"
    },

    // ADVANCED LEVEL QUESTIONS
    {
        id: 36,
        question: "What is the Temporal Dead Zone in JavaScript?",
        options: ["The time between variable declaration and initialization", "The time between function declaration and execution", "The time between object creation and property assignment", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 37,
        question: "What will this output: console.log(+'42')?",
        options: ["42", "-42", "NaN", "undefined"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 38,
        question: "What is the difference between call() and apply()?",
        options: ["call() accepts arguments as a list, apply() accepts arguments as an array", "apply() accepts arguments as a list, call() accepts arguments as an array", "Both accept arguments as a list", "Both accept arguments as an array"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 39,
        question: "What is memoization in JavaScript?",
        options: ["A technique to optimize recursive functions by caching results", "A way to create private variables", "A method to handle asynchronous operations", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 40,
        question: "What does Object.freeze() do?",
        options: ["Prevents new properties from being added to an object", "Prevents existing properties from being removed", "Prevents existing properties from being changed", "All of the above"],
        correct: 3,
        difficulty: "advanced"
    },
    {
        id: 41,
        question: "What is the output: console.log(typeof typeof 1)?",
        options: ["number", "string", "undefined", "object"],
        correct: 1,
        difficulty: "advanced"
    },
    {
        id: 42,
        question: "What is a generator function in JavaScript?",
        options: ["A function that can be paused and resumed", "A function that returns an iterator", "A function that uses the 'yield' keyword", "All of the above"],
        correct: 3,
        difficulty: "advanced"
    },
    {
        id: 43,
        question: "What does the void operator do?",
        options: ["Evaluates an expression and returns undefined", "Prevents default behavior of an event", "Stops event propagation", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 44,
        question: "What is the purpose of WeakMap in JavaScript?",
        options: ["To store key-value pairs where keys are objects and values can be garbage collected", "To store key-value pairs where keys are strings and values can be garbage collected", "To store key-value pairs where keys are objects and values cannot be garbage collected", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 45,
        question: "What will be logged: console.log([1,2,3].map(parseInt))?",
        options: ["[1, NaN, NaN]", "[1, 2, 3]", "NaN", "undefined"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 46,
        question: "What is the difference between shallow and deep copy?",
        options: ["Shallow copy copies only the top level, deep copy copies all levels", "Shallow copy copies all levels, deep copy copies only the top level", "Both are the same", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 47,
        question: "What is a Proxy in JavaScript?",
        options: ["An object that wraps another object and intercepts operations", "A function that returns a new object", "A method to create custom events", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 48,
        question: "What does 'debouncing' mean in JavaScript?",
        options: ["A technique to limit the rate at which a function is executed", "A method to handle multiple events at once", "A way to create custom events", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    },
    {
        id: 49,
        question: "What is the output: console.log(1 < 2 < 3 && 3 > 2 > 1)?",
        options: ["true", "false", "undefined", "NaN"],
        correct: 1,
        difficulty: "advanced"
    },
    {
        id: 50,
        question: "What is tail call optimization in JavaScript?",
        options: ["A technique to optimize recursive functions by reusing the same stack frame", "A method to handle asynchronous operations", "A way to create custom events", "None of the above"],
        correct: 0,
        difficulty: "advanced"
    }
];

// EXPORT FOR USE IN MAIN APPLICATION
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizQuestions;

}
