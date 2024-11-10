class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;

    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Quantity = " + "Not enough stock";
        }

        this.quantity -= quantity;
        return "Remaining stock = " + quantity * this.price;
    }

    restockProduct(quantity) {
        this.quantity += quantity;

    }
}
const product1 = new Product("Bag", 700, 30);
console.log(product1);

product1.updatePrice(900);
console.log(product1);

const saleAmount = product1.sellProduct(5);
console.log(saleAmount);
console.log(product1);

product1.restockProduct(25);
console.log(product1);



//Question 2
function findUniqueWords(words) {
    const uniqueWordsSet = new Set(words);
    return [...uniqueWordsSet];
}

const words = ["Apple", "banana", "Apple", "banana", "orange", "banana"];
const uniqueWords = findUniqueWords(words);
console.log(uniqueWords);



//Question 3
function commonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const intersection = new Set([...set1].filter(x => set2.has(x)));

    return [...intersection];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9];

const common = commonElements(array1, array2);
console.log(common);


//Part 3: 

class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
    }

    getGrade(studentName) {
        return this.grades.get(studentName);
    }

    updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) {
            this.grades.set(studentName, newGrade);
        } else {
            console.log("Student not found.");
        }
    }

    removeStudent(studentName) {
        this.grades.delete(studentName);
    }
}
const grades = new StudentGrades();

grades.addGrade("Femi", 77);
grades.addGrade("Gbenga", 67);
grades.addGrade("Toni", 89);
grades.addGrade("Matt", 58);

console.log(grades.getGrade("Femi"));

grades.updateGrade("Matt", 58);
console.log(grades.getGrade("Matt"));

console.log(grades.getGrade("Toni"));

grades.removeStudent("Gbenga");
console.log(grades.getGrade("Gbenga"));




//Part 4

function validatePassword(password) {
    const specialCharsRegex = /[!@#$%^&?*()_+-=[]/;

    return password.length >= 8 && specialCharsRegex.test(password);
}

const password1 = "password123";
const password2 = "p@w0rd";

console.log(validatePassword(password1));
console.log(validatePassword(password2));


