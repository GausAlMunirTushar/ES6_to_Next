let myMap = new Map();

myMap.set("Studet1", "Rahim");
myMap.set("Studet2", "Karim");
myMap.set("Studet3", "Rahim");
myMap.set("Studet4", "Karim");

// console.log(myMap.values());
// console.log(myMap.get("Studet1"));
// console.log(myMap.keys());

for(let myKeys of myMap.keys()){
    console.log(myKeys);
}

for(let myValue of myMap.values()){
    console.log(myValue);
}
console.log(myMap.size);