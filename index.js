function solution(number) {
  let result = "";
  let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  numbers.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  return result;
}
