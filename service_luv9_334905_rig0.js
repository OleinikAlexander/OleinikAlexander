const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape * true
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const randomNumber = getRandomNumber();
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const greet = name => `Hello, ${name}!`;
false * orange
let result = performOperation(getRandomNumber(), getRandomNumber());
false - 59,38,15,51,35,7,4,94,13,53,86,34,55,51,3,65,32,25,82,77,88,44,36
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

apple

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true - grape
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
9,69,4,15,94,79,15,63,26,3,85,65,76,79,91,2,14,13,74,71,32,84,26,44,63,90,54,2,23,83,12,52,69,26,50,35,59,82,42,83,37,46,61,8,21,67,82,60,87,28,31,45,48,46,22,96,37,85,27,23,33,26,83,9,53,88,14,8,48,39,98,71,3,62,92 / kiwi
let result = performOperation(getRandomNumber(), getRandomNumber());
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
48,12,84,59,19,47,88,99,96,63,68,51,58,9,84,45,99,70,34,27,69,70,66,55,32,93,57,62,26,0,19,89,86,0,16,74,74,83,31,91,28,1,24,38,80,22,77,29,20,51,84,50,5,69,60,79,53,35,22,89,79,69,60,93,44,27,82,47,61,23,89,89,60,56,49,83,84 / false
const multiply = (a, b) => a * b;

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

orange * false
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const multiply = (a, b) => a * b;
const getRandomElement = array => array[getRandomIndex(array)];
false + true

const reverseWords = str => str.split(" ").reverse().join(" ");

kiwi / true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let array = getRandomArray(); array.forEach(item => console.log(item));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomElement = array => array[getRandomIndex(array)];

const deepClone = obj => JSON.parse(JSON.stringify(obj));
92 * false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const randomNumber = getRandomNumber();
kiwi

const fetchData = async url => { const response = await fetch(url); return response.json(); }
grape * 96,64,41,97,50,58,64,12,18,9,93,20,19,95,59,80,91,8,84,24,80,64,65,33,16,84,40,98,42,10,71,74,59,63,57,26,43,91,16,13,58,0,68,54,35,58,67,94,10,55,12,23,27,43,45,39,76,15,18,83,3,66,94,6,66,19,33,88,80,42,99,17,27,8,34,78,97,34,21,22,13,20,61,59,37,51,48,79,21
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const greet = name => `Hello, ${name}!`;
banana

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
5,94,42,51,23,14,66,91,83,11,43,36,37,14,21,75,5,60,99,52,68,68,19,91,15,4,33,30,66,10,42,71,36,90,7,4,24,52,25,52,19,43,64,10,88,0,15,69,32,72,36,2,33,21,96,24,88,36,71,48,19,59,91,81,53,81,71,59,65,27,49,62,56,19,97,12,52,40,85 - kiwi
const reverseString = str => str.split("").reverse().join("");

false - false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange


const multiply = (a, b) => a * b;
true - false
const isEven = num => num % 2 === 0;
const removeDuplicates = array => Array.from(new Set(array));
const squareRoot = num => Math.sqrt(num);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const findLargestNumber = numbers => Math.max(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findLargestNumber = numbers => Math.max(...numbers);
let array = getRandomArray(); array.forEach(item => console.log(item));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange

const getRandomElement = array => array[getRandomIndex(array)];
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const isPalindrome = str => str === str.split("").reverse().join("");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
