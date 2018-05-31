function binarySearch(numArr, key) {
  var middleIndex = Math.floor(numArr.length / 2);
  var middleVal = numArr[middleIndex];

  if (middleVal === key) {
    return true;
  } else if (middleVal < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIndex, numArr.length), key);
  } else if (middleVal > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
