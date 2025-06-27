// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier.
// Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });

// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure

// ---------------------------------------------------------------------------------------------------------------------------------------

// Now, here is one more thing to keep in mind is that there are two things microtasks and macrotasks queue
// Microtask queue contains all the priority tasks like promises and at the same time macrotasks contains other ones like setTimeout, setInterval
// If we see in the example below, setTimeout has been placed before the promise with 0 milliseconds so it should execute first
// But it will executes after the promise has been executed because promises are in microtask queue which is priority queue

// setTimeout(() => {
//   console.log("SetTimeout callback function executed.");
// });

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Promise successfully resolved");
//   else reject("Promise has been failed");
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Promise.all() method waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// Example of Promise.all given below-

// let promise1 = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) resolve("Promise1 successfully resolved");
//     else reject("Promise1 has been failed");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) resolve("Promise2 successfully resolved");
//     else reject("Promise2 has been failed");
//   }, 4000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   let success = false;
//   setTimeout(() => {
//     if (success) resolve("Promise3 successfully resolved");
//     else reject("Promise3 has been failed");
//   }, 6000);
// });

// let allPromises = Promise.all([promise1, promise2, promise3]);

// allPromises
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Promise.allSettled() method waits for all promises to settle either it will fulfilled or rejected, this method returns an array of their outcomes.
// Example of Promise.allSettled given below-

// let promise1 = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) resolve("Promise1 successfully resolved");
//     else reject("Promise1 has been failed");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   let success = false;
//   setTimeout(() => {
//     if (success) resolve("Promise2 successfully resolved");
//     else reject("Promise2 has been failed");
//   }, 4000);
// });

// let promise3 = new Promise((resolve, reject) => {
//   let success = true;
//   setTimeout(() => {
//     if (success) resolve("Promise3 successfully resolved");
//     else reject("Promise3 has been failed");
//   }, 6000);
// });

// let settledPromises = Promise.allSettled([promise1, promise2, promise3]);

// settledPromises.then((results) => {
//   console.log(results)
// });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Promise.race() method resolves or rejects as soon as the first promise settles.
// Example has been given below-

// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 900)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 3 finished"), 2000)),
// ]).then((result) =>
//     console.log(result));


// ---------------------------------------------------------------------------------------------------------------------------------------


// Chaining with Promise.prototype.then() method allows sequential execution of promises, passing results to the next .then() Method.
// Example given below-

// Promise.resolve(5)
//   .then((value) => value * 2)
//   .then((value) => value + 3)
//   .then((finalValue) => console.log(finalValue));


// ---------------------------------------------------------------------------------------------------------------------------------------


