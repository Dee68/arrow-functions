/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b){
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers = (a, b) =>{
    //code block
    return a + b;
}
// let sum = addTwoNumbers(3, 5);
// console.log(sum);
// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); // also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum = addTwoNumbers2(3, 5);
console.log(sum);
// Implicit Returns
const saySomething = message => message;
let greet = saySomething('Hello')
console.log(greet);
const sayhello = () => console.log('Hello there!!!');
sayhello();
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiple line strings!!!
    </p>`
)
console.log(returnMultipleLines());
//=============================================================================================
// spread operator
//No spread
let arr1 = [1,2,3];
let arr2 = arr1
arr2.push(4); //[1,2,3,4]
// console.log(arr1);//[1,2,3,4]
// console.log(arr2);
// using spread to copy array
let arr3 = [...arr1];
arr3.push(5); //[1,2,3,4,5];
// console.log(arr1);
// console.log(arr3);
//copying objects
// let obj1 = {a:1,b:2,c:3};
// let obj2 = {...obj1,d:4};
// console.log(obj1);
// console.log(obj2);
//Rest operator syntax
//Regular function
const sumAll = (a, b, c) => {
    return a + b + c;
};
// using the rest operator
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest){
        sum += i;
    }
    return sum;
};
// console.log(sumAll(1,2,3));
// console.log(sumRest(1,2,3,4,5,6,7));
//Destructuring
//without destructuring
// let ages = [12,34,19];
// let John = ages[0];
// let Mike = ages[1];
// let Jane = ages[2];

// let jobs = {
//     'mike':'Designer',
//     'john':'Developer',
//     'jane':'Accountant'
// };
// let mike = jobs.mike;
// let john = jobs.john;
// let jane = jobs.jane;
// with destructuring
let ages = [12,34,19];
let [John, Mike, Jane] = ages;
let jobs = {
    'mike':'Designer',
    'john':'Developer',
    'jane':'Accountant'
};
let { mike, john, jane } = jobs;
//Destructuring a subset
let languages = ['english','french','spanish','german','italian','russian'];
let [JohnNative, JohnSecondary] = languages;
console.log(JohnNative, JohnSecondary);
let [,,JaneNative,JaneSecondary] = languages;
// console.log(JaneNative, JaneSecondary);
//Destructuring objects with property name
let languages1 = {
    firstLanguage:'english',
    secondLanguage:'french',
    thirdLanguage:'german',
    fourthLanguage:'spanish'
}
let {firstLanguage, fourthLanguage} = languages1;
// console.log(firstLanguage, fourthLanguage);
//using destructuring with rest operator syntax
let fruits = ['apple','orange','mango','guava','cheery','plum','apricot'];
let [favourite,secondFavourite,...others] = fruits;
// console.log(favourite, secondFavourite);
// console.log(others);
let favouriteFood = {
    brian:'pizza',
    anna:'roseto',
    james:'fried rice',
    john:'pepper soup',
    jane:'okra soup'
};
let {brian,anna,...rest} = favouriteFood;
// console.log(brian);
// console.log(anna);
// console.log(rest);
let students = [
    {   id: 1,
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {   id:2,
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {   id:3,
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {   id:4,
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
// let newStudent = students.map(student => [student.name,student.id]);
// console.log(newStudent);
let newStudent = students.map(student => student['age']=20);
// console.log(newStudent);
// console.log(students);
//using reduce
const teamMembers = [
    {
        name:'Andrew',
        profession:'Developer',
        yrsExperience: 5
    },
    {
        name:'Ariel',
        profession:'Developer',
        yrsExperience: 7
    },
    {
        name:'Michael',
        profession:'Designer',
        yrsExperience: 1
    },
    {
        name:'Kelly',
        profession:'Designer',
        yrsExperience: 3
    },
    {
        name:'Mark',
        profession:'Manager',
        yrsExperience: 10
    }
    ];
// group members by profession and return total experience
let experienceByProf = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});
let personsByProf = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [curr.name];
    } else {
        acc[key].push(curr.name)
    }
    return acc;
}, {});
console.log(experienceByProf);
console.log(personsByProf);