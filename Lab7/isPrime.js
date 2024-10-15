const isPrime = (n) => {
  return new Promise((resolve, reject) => {
    if (n <= 1) {
      reject({ prime: false });
    }
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        reject({ prime: false });
        return;
      }
    }
    resolve({ prime: true });
  });
};
console.log("start");
isPrime(7).then(console.log).catch(console.error);
console.log("end");

// Using Async/Await

// const testPrime = async (n) => {
//   console.log("start");
//   try {
//     let result = await isPrime(n);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// testPrime(7);
// console.log("end");
