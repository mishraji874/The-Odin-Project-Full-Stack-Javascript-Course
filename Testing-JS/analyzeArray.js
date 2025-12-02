const analyzeArray = (arr) => {
  if (arr.length === 0) {
    return {
      average: 0,
      max: 0, 
      min: 0,
      length: 0,
    };
  }

  const { sum, min, max } = arr.reduce((obj, num) => {
    if (num < obj.min) obj.min = num;
    if (num > obj.max) obj.max = num;
    obj.sum += num;
    return obj;
  }, {
    sum: 0,
    min: Infinity,
    max: -Infinity,
  });

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
};

export default analyzeArray;