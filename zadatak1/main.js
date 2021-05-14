import { Letter } from "./Letter.js";
import { Customer } from "./Customer.js";
import { PostOffice } from "./PostOffice.js";

const customer1 = new Customer('John', 'Doe');
const customer2 = new Customer('Jane', 'Doe');

const letter1 = new Letter(customer1, customer2, 'Letter 1 content.');
const letter2 = new Letter(customer2, customer1, 'Letter 2 content.');
const letter3 = new Letter(customer1, customer1 ,'Letter 3 content.');

const postOffice = new PostOffice();

postOffice.addLetter(letter1);
postOffice.addLetter(letter2);
postOffice.addLetter(letter3);