import fs from "fs";

// fs.readFile("A.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// });

// let data = fs.readFileSync("A.txt", "utf8")
// console.log(data);

// fs.writeFile("A.txt", "And I love coding", (err) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log("File written successfully")
//     }
// });

// fs.writeFileSync("A.txt", "My name is Atul Pandey and I am 23 years old.");

// fs.appendFile("A.txt", "\nAnd I love coding", (err) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log("Data updated successfully")
//     }
// });

// fs.appendFileSync("A.txt", "\nAnd I am doing MERN stack");

// fs.mkdir("NewFolder", (err) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log("Directory created successfully")
//     }
// });

// fs.mkdirSync("NewFolder1");

// fs.readdir(".", (err, files) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(files)
//     }
// });

// const files = fs.readdirSync(".");
// console.log(files);

// console.log("Ok");

// Copy data from one file to another file.
let data = fs.readFileSync("src.txt", "utf8");
fs.writeFileSync("des.txt", data);