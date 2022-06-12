const favoriteFood = ["fried chicken", "pizza", "burger", "fried rice"];
const getFood = () => {
  favoriteFood.forEach((data) => {
    console.log(data);
  });
};

const postFood = (food) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        favoriteFood.push(food);
        let err = false;
        if (!err) {
          resolve();
        } else {
          throw new Error("sorry something wrong!");
        }
      } catch (e) {
        reject(e);
      }
    }, 2000);
  });
};

postFood("fench fries")
  .then(getFood)
  .catch((err) => console.log(err));
