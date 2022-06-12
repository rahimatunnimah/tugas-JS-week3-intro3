const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //untuk menghandle error
      try {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          throw new Error("Hari ini bukan hari kerja");
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((res) => console.log(res)) // untuk memanggil fungsi cekHariKerja
  .catch((err) => console.log(err));
