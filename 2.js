const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};
const showMonth = (err, month) => {
  if (err) {
    console.log(err);
    return;
  }
  month.map((data) => {
    console.log(data);
    return;
  });
};

getMonth(showMonth);
