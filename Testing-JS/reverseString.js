const reverseString = (str) => {
  const strArr = str.split('');

  let [left, right] = [0, str.length - 1];

  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }

  return strArr.join('');
};

export default reverseString;