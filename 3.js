//program 1 mengecek talent
const cekTalent = (talent) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
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
        let cek = dataTalent.find((item) => {
          return item === talent;
        });
        if (cek) {
          resolve(cek);
        } else {
          throw new Error("talent not found");
        }
      } catch (e) {
        reject(e);
      }
    }, 2000);
  });
};

cekTalent("ni'mah")
  .then((res) => console.log(res))
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
