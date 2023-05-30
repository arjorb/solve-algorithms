function solution(roman) {
  let result = 0;
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < roman.length; i++) {
    const current = romanNumber[roman[i]];
    const next = romanNumber[roman[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
