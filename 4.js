const axios = require("axios");

const fullName = () => {
  return new Promise((resolve, reject) => {
    try {
      const request = axios.get("https://jsonplaceholder.typicode.com/users");
      if (request) {
        resolve(request);
      } else {
        reject(new Error("data not found"));
      }
    } catch (error) {
      reject(error);
    }
  });
};
fullName()
  .then((res) => {
    res?.data?.forEach((user) => {
      console.log(user.name);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
