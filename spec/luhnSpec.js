describe("Luhn", () => {
  let Luhn = require('../lib/luhn');
  let luhn;

  beforeEach(() => {
    luhn = new Luhn();
  });

  describe("helper methods", () => {
    it("should turn the input number into an array of integers", () => {
      const numberArr = luhn.numberArray(4194560385008504);
      const correctArr = [4, 1, 9, 4, 5, 6, 0, 3, 8, 5, 0, 0, 8, 5, 0, 4];
      expect(numberArr).toEqual(correctArr);
    });

    it("should double the even digits, starting from the right", () => {
      const numberArr = luhn.numberArray(4194560385008504);
      const result = luhn.doubleEvenDigitsFromTheRight(numberArr);
      const correctArr = [8, 1, 18, 4, 10, 6, 0, 3, 16, 5, 0, 0, 16, 5, 0, 4];
      expect(result).toEqual(correctArr);
    });

    it("should subtract 9 from doubled digits greater than 10", () => {
      const numberArr = luhn.numberArray(4194560385008504);
      const doubledArr = luhn.doubleEvenDigitsFromTheRight(numberArr);
      const result = luhn.subtract9(doubledArr);
      const correctArr = [8, 1, 9, 4, 1, 6, 0, 3, 7, 5, 0, 0, 7, 5, 0, 4];
      expect(result).toEqual(correctArr);
    });

    it("should sum the digits", () => {
      const numberArr = luhn.numberArray(4194560385008504);
      const doubledArr = luhn.doubleEvenDigitsFromTheRight(numberArr);
      const subtractedArr = luhn.subtract9(doubledArr);
      const result = luhn.sumDigits(subtractedArr);
      expect(result).toEqual(60);
    });
  });

  describe("isValid", () => {
    it("should return true for a valid 16-digit number", () => {
      expect(luhn.isValid(4194560385008504)).toEqual(true);
    });

    it("should return false for an invalid 16-digit number", () => {
      expect(luhn.isValid(4194560385008505)).toEqual(false);
    });

    it("should return true for a valid 15-digit number", () => {
      expect(luhn.isValid(377681478627336)).toEqual(true);
    });

    it("should return false for an invalid 15-digit number", () => {
      expect(luhn.isValid(377681478627337)).toEqual(false);
    });
  });
});