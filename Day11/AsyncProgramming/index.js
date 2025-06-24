// import fs from "fs";

// fs.readFile("example.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// });

// console.log("OKAY");

// console.log("Okay")

// setTimeout(() => {
//     console.log("Bye")
// }, 2000)

// console.log("Hello")

// import fs from "fs/promises";

// fs.readFile("example.txt", "utf8")
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// console.log("Okay")

// Pending Fulfilled Rejected

// let p1 = new Promise((resolve, reject) => {
//     let dataFromApi = true
//     if(dataFromApi == true) {
//         resolve({data: "The data is resolved"})
//     }
//     else {
//         reject("Error, API didn't worked")
//     }
// });

// p1
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// import fs from "fs/promises";

// async function readFile() {
//     try {
//         const data = await fs.readFile("example.txt", "utf8")
//         console.log(data)
//     } 
//     catch (error) {
//         console.log(error)
//     }
// }

// readFile()

// console.log("Okay")

// for(let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

import fs from "fs/promises";

async function writeFile() {
    try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        await fs.writeFile("data.json", JSON.stringify(data))
        console.log("Data created and saved")
    } 
    catch (error) {
        console.log("Error fetching the data", error)
    }
}

writeFile()