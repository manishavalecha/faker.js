#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())
//console.log(faker.education.subject())
console.log("Education Category ");

console.log("Name of the Degree = " + faker.education.degree())
console.log("Subject taken = " + faker.education.subject())
console.log("Status of the cousre = " + faker.education.status())
console.log("CGPA obtained = " +faker.education.cgpa())
//console.log(faker.name.findName())

//console.log(faker.address)
//console.log(faker.internet.email())
//console.log(faker.date.recent())
//console.log(faker.helpers.contextualCard());
console.log("Books Category ");

console.log("Name of the Book = " + faker.Books.Book_name())
console.log("Author of the Book= " + faker.Books.Book_author_name())
//console.log("Book published year = " + faker.Books.Book_published_year())
console.log("Genre of Book = " +faker.Books.Book_genre())
console.log("Price of Book = " +faker.Books.Book_price())
//console.log("Source link of Book = " +faker.Books.Book_source_link())

return;
faker.locale = "uk";

console.log(faker.helpers.contextualCard());