let mySet = new Set();

mySet.add("Bangladesh");
mySet.add("India");
mySet.add("Pakistan");
mySet.add("Srilanka");
mySet.add("Nepal");
mySet.add("Bhutan");
console.log(mySet);

for(let item of mySet){
  console.log(item);
}

let mySetPro = new Set([1,2,3,4,5,6,7,8,9,10]);
console.log(mySetPro);
console.log(mySetPro.size);
console.log(mySetPro.has(5));
console.log(mySetPro.delete(5));
console.log(mySetPro.values())