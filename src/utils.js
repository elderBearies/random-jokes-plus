// given an array, grabs a random element.
const getRandomArrItem = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

// given an array and a number, grabs a shuffled selection of the given array
const getRandomArrItems = (arr, num = 1) => {
  const randomArr = [];
  for (let i = 0; i < num && i < arr.length; i += 1) {
    const newItem = getRandomArrItem(arr);
    if (randomArr.includes(newItem)) {
      i -= 1;
    } else {
      randomArr.push(newItem);
    }
  }
  return randomArr;
};

module.exports.getRandomArrItem = getRandomArrItem;
module.exports.getRandomArrItems = getRandomArrItems;
