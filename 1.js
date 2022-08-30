const checkWeekday = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const dataDay = [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
        ];
        let cek = dataDay.find((item) => {
          return item === day.toLowerCase();
        });
        if (cek) {
          resolve(cek);
        } else {
          throw new Error("Today is not a work day");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

checkWeekday("saturday")
  .then((res) => console.log(res)) // untuk memanggil fungsi checkWeekday
  .catch((err) => console.log(err));
