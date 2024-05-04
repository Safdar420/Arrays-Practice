//  Q no 1 Using push method 
let users:string[] =["Safdar","Ali","Sardar","Ali","Almas"]

users.push("Zafar","Khan");

console.log(users);
// Result = ["Safdar","Ali","Sardar","Ali","Almas","Zafar","Khan"]

//  Q no 2 using pop method

let cars:string[] =["mehran","Corola","Allto"]

cars.pop();

console.log(cars);
// Result =["mehran","Corola"]

//  Q no 3 using shift method

let friends:string[] =["Amir","Adil","Wakeel","Safdar"]
friends.shift()

console.log(friends);
// Result = ["Adil","Wakeel","Safdar"]
//  Q no 4 using unshift method

let favouriteColors:string[] =["White","Green","Red","Yellow","Pink"]

favouriteColors.unshift("Hi")

console.log(favouriteColors);
// Result = ["Hi",White","Green","Red","Yellow","Pink"]