import fs from "fs";

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setImmediate(() => {
  console.log("setImmediate 1");
});

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) console.log("there is an error. can not read from file");
  else {
    console.log(data);
  }
});
// CommonJS

// nextTick 1
// promise 1
// setTimeout 1
// setImmediate 1
// Hello from input txt!!

// ES Module

// promise 1
// nextTick 1
// setImmediate 1
// setTimeout 1
// Hello from input txt!!
