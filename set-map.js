const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);

set.forEach(element => {
    console.log(element);
});
console.log(set);


// ------------Map--------------
const map = new Map();
map.set("name", "khushali");
map.set("country", "india");
map.set("email", "khushalisakhreliya@gmail.com");

console.log(map.get("name"));

// map.delete('email');

map.forEach((val, key) => {
    console.log(`${key} : ${val}`);
});