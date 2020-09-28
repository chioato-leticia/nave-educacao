const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("resolveu 2"), 2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("rejeitou 3"), 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("resolveu 1"), 1000);
});

// const promisesAll = Promise.all([p1, p2, p3]);

// promisesAll
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => console.log(err));

const promisesRace = Promise.race([p1, p2, p3]);

promisesRace
  .then((value) => {
    console.log(value + "resolved");
  })
  .catch((err) => console.log(err + "rejected"));
