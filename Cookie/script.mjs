import {Cookie} from "./cookie.mjs";
console.log ("Pirms: " + document.cookie);

Cookie.set ('username', 'admin');
Cookie.set ('username1', 'admin1');
console.log ("Pēc: " + document.cookie);

console.log (Cookie.get('name'));

