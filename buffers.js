import { getSeparator } from "./utils.js";

// What is the Buffer Module?
// The Buffer module in Node.js is used to handle binary data.
// Buffers are similar to arrays of integers but are fixed-length and correspond to raw memory allocations outside the V8 JavaScript engine.
// Node.js provides the Buffer class as a global object, so you don't need to require or import it explicitly.

// They are similar to arrays of integers but are fixed in size and represent raw memory allocations outside the V8 heap

getSeparator();

const data = "Hello, World!\nThis is a readable stream example.";

console.log(`Original data(${data.length})-\n`);
console.log(data);

getSeparator();

const buf = Buffer.from(data);

console.log(`Buffered data(${buf.length})-\n`);
console.log(buf);

getSeparator();

const str = buf.toString();
console.log(`To string(${str.length})-\n`);
console.log(str);

getSeparator();


// Creating Buffers
// There are several ways to create buffers in Node.js, each with different performance and safety characteristics:

// Buffer.alloc()
// Creates a new Buffer of the specified size, initialized with zeros.
// This is the safest way to create a new buffer as it ensures no old data is present.

// const buffer1 = Buffer.alloc(10);
// console.log(buffer1);

// Buffer.allocUnsafe()
// Creates a new Buffer of the specified size, but doesn't initialize the memory.
// This is faster than Buffer.alloc() but may contain old or sensitive data.

// const buffer2 = Buffer.allocUnsafe(10);
// console.log(buffer2);

// Fill the buffer with zeros for security
// buffer2.fill(0);
// console.log(buffer2);

// Buffer.from()
// Creates a new Buffer from various sources like strings, arrays, or ArrayBuffer. This is the most flexible way to create buffers from existing data.

// const buffer3 = Buffer.from([65, 66, 67, 68, 69]);
// console.log(buffer3);


// Writing to Buffers

// Create an empty buffer
// const buffer = Buffer.alloc(20);

// // Write a string to the buffer
// buffer.write('o');

// // Write bytes at specific positions
// buffer[3] = 44; // ASCII for ','
// buffer[6] = 32; // ASCII for space
// buffer.write('Node', 10);
// console.log(buffer.toString());


// Reading from Buffers

// Create a buffer from a string
// const buffer = Buffer.from('Hello, Node.js!');

// // Read the entire buffer as a string
// console.log(buffer.toString());

// // Read a portion of the buffer (start at position 7, end before position 11)
// console.log(buffer.toString('utf8', 7, 11));

// // Read a single byte
// console.log("0th index -")

// console.log(`ASCII - ${buffer[0]}`);

// // Convert the ASCII code to a character
// console.log(`Character - ${String.fromCharCode(buffer[0])}`);


// Iterating Through Buffers

// // Create a buffer from a string
// const buffer = Buffer.from('Hello');

// // Iterate using for...of loop
// for (const byte of buffer) {
// console.log(byte);
// }

// // Iterate using forEach
// buffer.forEach((byte, index) => {
//   console.log(`Byte at position ${index}: ${byte}`);
// });


// Buffer Methods

// Buffer.compare() - Compares two buffers and returns a number indicating whether the first one comes before, after, or is the same as the second one in sort order:

// Buffer.copy() - Copies data from one buffer to another:

// Buffer.slice() - Creates a new buffer that references the same memory as the original, but with offset and cropped to the given end:

// Buffer.toString() - Decodes a buffer to a string using a specified encoding:

// Buffer.equals() - Compares two buffers for content equality:

// Buffer.concat() - Concatenating Buffers; You can combine multiple buffers into one using 


// Searching in Buffers - Buffers provide methods to search for values or sequences-
// buffer.indexOf, buffer.includes, buffer.lastIndexOf

// Buffer and Streams
// Buffers are commonly used with streams for efficient data processing:
