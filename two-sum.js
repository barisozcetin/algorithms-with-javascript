function twoSum(numArray, sum) {
  var pairs = [];
  var hashtable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}
