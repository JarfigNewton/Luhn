# Luhn Algorithm

The Luhn algorithm is a formula used to validate a variety of identification numbers, such as credit card numbers. It is meant to prevent users from accidental errors.

How the Algorithm Works:
  Step 1 - Break the credit card number into its individual digits.
  Step 2 - Start from the right, double every second digit (i.e., digit 2, 4, 6, etc.).
  Step 3 - If the doubled value is greater than or equal to 10, take the value and subtract 9 from it.
  Step 4 - Sum the digits.
  Step 5 - If the sum is divisible by 10 it's a valid number. Otherwise it's invalid.

## Getting Started

This code runs using node.js, with Jasmine for testing

You can install node.js from here:
https://nodejs.org/en/download/

You can install Jasmine using npm, locally in the project and globally to use the CLI tool. From the terminal:
`npm install jasmine`
`npm install -g jasmine`

## Software requirements

- node 7.10.0 or higher
- Jasmine 3.1.0 or higher

## Running the Tests

From the working directory, run the following command in the terminal:
`jasmine`