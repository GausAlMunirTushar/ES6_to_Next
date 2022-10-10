// The for of loop is a more modern way to loop through arrays and objects.
/* let theCountry = ['USA', 'Germany', 'Italy', 'France', 'Japan'];
for (let country of theCountry) {
    console.log(country);
}; */

let myDetails ={
    name: "Tushar",
    age: 20,
    isMarried: false,
    hobbies: ["Sports", "Cooking"],
}

for( let props in myDetails){
    // console.log(props);
    console.log(`${props} : ${myDetails[props]}`);
}