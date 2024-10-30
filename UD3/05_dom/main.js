
console.log("Todos los divs:");
document.querySelectorAll("div").forEach(div => console.log(div));

console.log("Elementos con clase 'buttons':");
document.querySelectorAll(".buttons").forEach(button => console.log(button));

console.log("Primer div con clase 'buttons':");
console.log(document.querySelector("div.buttons"));

console.log("Todos los divs con clase 'buttons':");
document.querySelectorAll("div.buttons").forEach(div => console.log(div));
