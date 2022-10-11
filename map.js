let myMap = new Map();

myMap.set("Studet1", "Rahim");
myMap.set("Studet2", "Karim");
myMap.set("Studet3", "Rahim");
myMap.set("Studet4", "Karim");
// myMap.delete("Studet1");
 myMap.clear();//delete all
// console.log(myMap.values());
// console.log(myMap.get("Studet1"));
// console.log(myMap.keys());

/* for(let myKeys of myMap.keys()){
    console.log(myKeys);
}

for(let myValue of myMap.values()){
    console.log(myValue);
}
console.log(myMap.size); */
if(myMap.has("Studet1")){
    console.log("Yes");
}else{
    console.log("No");
}