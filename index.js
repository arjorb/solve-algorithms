function reverseVowels(str) {
  const stringArray = [...str];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const reversed = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) reversed.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(stringArray[i])) stringArray[i] = reversed.pop();
  }
  return stringArray.join("");
}
