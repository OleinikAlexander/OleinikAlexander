const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
true - false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana * true
class MyClass { constructor() { this.property = getRandomString(); } }
5 - 71,38,40,79,16,19,32,66,48,33,57,96,24,59,54,56,35,40,13,39,55,11,42,81,70,46,95,0,86,19,13,10,11,36,25,36,17,91,5,82,85,2,2,27,13,9,24,18,98,1,7,67,87,11,97,32,1,75,81,11,24,26,17,65,1,3

const capitalizeString = str => str.toUpperCase();
const randomNumber = getRandomNumber();

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange

console.log(getRandomString());
11,19,75,58,24,32,47,59,41,25,22,53,74,67,80,69,81,13,37,24,70,45,1,74,39,47,11,93,17,86,96,29,60,96,1,11,24,51,51,7,90,79,60,46,10,94,47,88,57,78,4,9,42,57,18,49,14,7 - true
const removeDuplicates = array => Array.from(new Set(array));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
false - true
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

29 / kiwi

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
banana * true
const getUniqueValues = array => [...new Set(array)];
true * false
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const capitalizeString = str => str.toUpperCase();
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
false / false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi - false
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
