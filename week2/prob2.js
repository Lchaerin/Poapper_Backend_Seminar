const fs = require('fs');

let book = { 
    title: 'Elementary Differential Equation and Boundary Value Problems',
    page: 607, 
    author: 'William E. Boyce',
    subject: 'Math',
    class_number: 'MATH200'
};
 
let data = JSON.stringify(book, null, 2);

fs.writeFile('./week2/textbook.json', data, () => {});