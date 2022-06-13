//program 1 menampilkan data talent
const talent = true;
const getTalent = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (talent) {
          const dataTalent = [
            "ni'mah",
            "rizky",
            "reza",
            "wachid",
            "nanang",
            "aldo",
            "ayi",
            "kevin",
            "adi",
            "ilham",
            "verdy",
            "apri",
            "taufik",
            "irfandi",
            "azis",
            "jafar",
          ];
          resolve(dataTalent);
        } else {
          throw new Error("empty data");
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

getTalent()
  .then((res) => {
    res.forEach((data) => {
      console.log(data);
    });
  })
  .catch((err) => console.log(err));

//program 2 menambahkan makanan favorit

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
          throw new Error("sorry something went wrong!");
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
