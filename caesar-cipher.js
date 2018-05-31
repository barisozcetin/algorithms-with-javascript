function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = "abcdefghijklmnoprstuvwxyz".split("");
  var newString = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUppperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  return newString;
}

function cipher2(str, num) {
  const arr = str.toLowerCase.split("");
  const firstCode = "a".charCodeAt(0);
  const lastCode = "z".charCodeAt(0);

  let asd = arr.map(char => {
    if (char === " ") return char;
    let newCharCode = char.charCodeAt(0) + num;
    if (newCharCode > lastCode) {
      return String.fromCharCode(firstCode + (newCharCode - lastCode));
    }
    if (newCharCode < firstCode) {
      return String.fromCharCode(lastcode - (firstCode - newCharCode));
    }
  });
}
