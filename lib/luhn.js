function Luhn() {}

// Check if a number is valid according to the Luhn algorithm
Luhn.prototype.isValid = (number) => {
  const numberArr = Luhn.prototype.numberArray(number);
  const doubledArr = Luhn.prototype.doubleEvenDigitsFromTheRight(numberArr);
  const subtractedArr = Luhn.prototype.subtract9(doubledArr);
  return Luhn.prototype.sumDigits(subtractedArr) % 10 === 0 ? true : false;
};

// Sum all digits
Luhn.prototype.sumDigits = (subtractedArr) => {
  let sum = 0;
  for (let digit of subtractedArr) {
    sum += digit;
  }
  return sum;
};

// Subtract 9 from any digit greater than 10
Luhn.prototype.subtract9 = (doubledArr) => {
  const subtractedArr = [];
  for (let digit of doubledArr) {
    digit >= 10 ? subtractedArr.push(digit -= 9) : subtractedArr.push(digit);
  }
  return subtractedArr;
};

// Starting from the rightmost digit and working to the left, double every second digit
Luhn.prototype.doubleEvenDigitsFromTheRight = (numberArr) => {
  const reversedArr = numberArr.reverse();
  const doubledArr = [];
  reversedArr.forEach((digit, index) => {
    (index + 1) % 2 === 0 ? doubledArr.push(digit *= 2) : doubledArr.push(digit);
  })
  return doubledArr.reverse();
};

// Turn the number into an array of digits
Luhn.prototype.numberArray = (number) => {
  const stringArr = number.toString().split('');
  const integerArr = [];
  for (let char of stringArr) {
    integerArr.push(parseInt(char));
  }
  return integerArr;
};

module.exports = Luhn;