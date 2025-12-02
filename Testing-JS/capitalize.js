const capitalize = (str) => {
  if (str === '') return '';

  const first = str.at(0);
  
  return first.toUpperCase() + str.slice(1);
};

export default capitalize;