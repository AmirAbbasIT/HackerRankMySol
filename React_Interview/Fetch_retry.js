const f = () => {
  return new Promise((resolve, reject) => {
    const fetchPlus = (retries) =>
      fetch("https://randomuser.me/api/?results=1000", {
        method: "GET",
        accept: "application/json",
      })
        .then((res) => res.json())
        .then(function (res) {
          if (res) {
            resolve(res);
          }
          if (retries > 0) {
            return fetchPlus(retries - 1);
          }
          reject(res.status);
        })
        .catch(function (err) {
          console.log(err, " error");
        });
    fetchPlus(3);
  });
};

console.log(
  "haha",
  f().then((r) => {
    console.log("Agya", r.results);
  })
);
