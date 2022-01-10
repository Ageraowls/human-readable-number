module.exports = function toReadable(number) {
    const arrNum = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
    const arrNumDozens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];
    if (number === 0) {
        return "zero";
    }
    if (number < 20 && number % 10 != 0) {
        return arrNum[number];
    }
    if (number % 10 === 0 && number < 100) {
        return arrNumDozens[number / 10];
    }
    if (number < 100) {
        return `${arrNumDozens[Math.floor(number / 10)]} ${arrNum[number % 10]}`;
    }
    if (number % 100 === 0) {
        return `${arrNum[number / 100]} hundred`;
    }
    if (number % 100 < 10) {
        return `${arrNum[Math.floor(number / 100)]} hundred ${arrNum[number % 100]}`;
    }
    if (number % 100 > 10 && number % 100 < 20) {
        return `${arrNum[Math.floor(number / 100)]} hundred ${arrNum[number % 100]}`;
    }
    if (number % 100 >= 10 && number % 10 === 0) {
        return `${arrNum[Math.floor(number / 100)]} hundred ${arrNumDozens[(number % 100) / 10]}`;
    }
    if (number % 100 >= 10 && number % 10 !== 0) {
        return `${arrNum[Math.floor(number / 100)]} hundred ${arrNumDozens[Math.floor((number % 100) / 10)]
            } ${arrNum[number % 10]}`;
    }
};
