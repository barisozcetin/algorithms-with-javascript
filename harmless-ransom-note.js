/// CHECK IF I CAN CREATE THE NOTE USING THE WORDS IN MAGAZINE

// WITH LOOPS
function harmlessRansomNote1(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word--];
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

// WITH ARRAY METHODS

function harmlessRansomNote2(noteText, magazineText) {
  const magazineObj = magazineText.split(" ").reduce(reducer, {});
  const noteObj = noteText.split(" ").reduce(reducer, {});
  function reducer(obj, item) {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
  }
  return Object.keys(noteObj).every(key => noteObj[key] === magazineObj[key]);
}
