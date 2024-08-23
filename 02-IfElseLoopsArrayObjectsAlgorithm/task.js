//task 1
// if(a>b && b>c){
//   Sum = a+b
//   console.log("Big sum result: ",Sum);  
// }
// else if(a>b && c>b){
//     Sum = a+c
//     console.log("Big sum result:",Sum);
// }
// else if (b>a && c>a){
//     Sum = b+c
//     console.log("Big sum result:",Sum);
// }

//task 2
// if(a>=b && b>=c){
//     let enBoyuk= ${a}${b}${c};
//     let enKicik= ${c}${b}${a};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 3
// if(a>=c && c>=b){
//     let enBoyuk= ${a}${c}${b};
//     let enKicik= ${b}${c}${a};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 4
// if(b>=c && c>=a){
//     let enBoyuk= ${b}${c}${a};
//     let enKicik= ${a}${c}${b};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 5
// if(b>=a && a>=c){
//     let enBoyuk= ${b}${a}${c};
//     let enKicik= ${c}${a}${b};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 6
// if(c>=b && b>=a){
//     let enBoyuk= ${c}${b}${a};
//     let enKicik= ${a}${b}${c};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 7
// if(c>=a && a>=b){
//     let enBoyuk= ${c}${a}${b};
//     let enKicik= ${b}${a}${c};
//     console.log("En boyuk eded:",enBoyuk)
//     console.log("En kicik eded:",enKicik)
// }

//task 8
// let num = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));
// if (arr.includes(num)) {
//     console.log(`Daxil etdiyiniz ${num} ededi array-de movcuddur.`);
// } else {
//     console.log(`Daxil etdiyiniz ${num} ededi array-de movcud deyil.`);
// }

//task9 
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min && arr[i] !== max) {
//         sum += arr[i];
//     }
// }
// console.log("cem =", sum)

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4] 

//task 10
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         let booleanElement = arr[i];
//         console.log("Boolean element:", booleanElement);
//         if (i > 0) {
//             console.log("Left neighbor:", arr[i - 1]);
//         } else {
//             console.log("No left neighbor");
//         }
//         if (i < arr.length - 1) {
//             console.log("Right neighbor:", arr[i + 1]);
//         } else {
//             console.log("No right neighbor");
//         }
//         break;
//     }
// }

//task 11
// let longestWord = "";    
// for (let word of arr) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }

//task 12
// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (typeof element === 'string' && element === element.toUpperCase()) {
//         console.log("Uppercase word:", element);
//         console.log("Index:", i);
//     }
// }
// console.log("Böyük hərfləri olan söz tapılmadı.");

//task 13
// for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (typeof element === 'string') {
//         let uppercaseCount = 0;
//         for (let char of element) {
//             if (char >= 'A' && char <= 'Z') {
//                 uppercaseCount++;
//             }
//         }
//         if (uppercaseCount > 2) {
//             console.log("Element:", element);
//             console.log("Index:", i);
//         }
//     }
// }

//task 14
// function getFirst(arr, n) {
//     return arr.slice(0, n);
// }

//task 15
// function join(arr, delimiter) {
//     return arr.join(delimiter);
// }
// console.log(join([1, 73, 99, 20], "*"));  // -> "1*73*99*20"

//task 16
// function convert(input) {
//     let result = '';
//     for (let i = 0; i < input.length; i++) {
//         let char = input[i];
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//     return result;
// }

//task 17
// function clear(arr) {
//     return arr.filter(element => Boolean(element));
// }

//task 18
// function clearDuplicate(arr) {
//     let uniqueArray = [...new Set(arr)];
//     return uniqueArray;
// }

// task 19
// function isEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// task 20 
// function findCharIndexes(str, char) {
//     let indexes = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             indexes.push(i);
//         }
//     }
//     if (indexes.length > 0) {
//         return indexes.reduce((sum, index) => sum + index, 0);
//     } else {
//         return -1;
//     }
// }

// task 21 
// function insertStringAtIndex(arr, index, str) {
//     if (index >= 0 && index < arr.length) {
//         arr.splice(index, 0, str);
//     } else {
//         arr.push(str);
//     }
//     return arr;
// }

// task 22 
// function mergeArrays(arr1, arr2, char) {
//     let result = arr1.join(char) + char + arr2.join(char);
//     return result;
// }

// task 23
// let students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];
// let averageScores = students.map(student => {
//     let totalScore = student.scores.reduce((sum, score) => sum + score, 0);
//     let averageScore = totalScore / student.scores.length;
//     return { name: student.name, averageScore: averageScore };
// });
// console.log(averageScores);

// task 24
// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
//   const longerThanFour = webTechs.filter(tech => tech.length > 4);
//   console.log(longerThanFour);

// task 25
// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
//   const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
//   const averagePrice = totalPrice / products.length;
//   console.log("Toplam fiyat:", totalPrice.toFixed(2)); // Toplam fiyatı 2 ondalık basamakla yazdır
//   console.log("Ortalama fiyat:", averagePrice.toFixed(2)); // Ortalama fiyatı 2 ondalık basamakla yazdır

// task 26
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// let filteredCountries = countries.filter(country => {
//     let lowerCaseCountry = country.toLowerCase(); 
//     return lowerCaseCountry.startsWith('a') && lowerCaseCountry.endsWith('a');
// });
// console.log(filteredCountries);