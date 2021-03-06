"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.value, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// You given an object that contain name
// and age of some customers as below :

// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }

// You have to return an array of strings that follow the below syntax
//
// the string format is "Customer Name :*** *** , Age :**"
// ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// -------------------------------------------------------------------------------------------------------

const customerAndAge = (obj) => {
  // write your code here

  let arr = [];
  for (let property in obj) {
    arr.push(`Customer Name :${property} , Age :${obj[property]}`);
  }
  return arr;

};


// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

const getEntries = (obj) => {
  // write your code here
  // let entries = Object.entries(obj);
  // let arr = [];
  // let str = "";
  // for (let i = 0; i < entries.length; i++) {
  //   for (let x = 0; x < entries[i].length; x++) {
  //     if (x == 0) {
  //       str = str.concat(entries[i][x], ":");
  //     } else {
  //       str = str.concat(" ", entries[i][x]);

  //     }
  //   }
  //   arr[i] = str;
  //   str = "";
  // }

  // return arr;

  //2nd:
  let arr = [];
  for (let property in obj) {
    arr.push(`${property}: ${obj[property]}`)
  }
  return arr;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kal??', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  // write your code here

  //   let coursesName = [];
  //   let studentsName = [];
  //   let test = [];
  //   let entries = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     entries = Object.entries(arr[i]);
  //     for (let x = 0; x < entries.length; x++) {
  //       if (x == 0) {
  //         coursesName.push(entries[0][1]);
  //       } else if (x == 2) {
  //         test.push(entries[2][1]);

  //       }
  //     }

  //   }
  //   for (let y = 0; y < test.length; y++) {
  //     for (let n = 0; n < test[y].length; n++) {

  //       studentsName.push(test[y][n]);
  //     }
  //   }
  // console.log(coursesName)
  // console.log(studentsName)

  //   return { coursesName, studentsName };
  
  //2nd:
  let coursesName = [];
  arr.forEach((obj) => {
    for (let property in obj) {
      if (property == 'course')
        coursesName.push(`${obj[property]}`)
    }
  });
  let studentsName = [];
  arr.forEach((obj) => {
    for (let property in obj) {
      if (property == 'Students') {

        obj[property].forEach((stu) => {
          studentsName.push(stu)
        });
      }
    }
  });
  
  return { coursesName, studentsName };

};

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kal??', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kal??',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr) => {
  // write your code here
  function Result(name, course) {
    this.Student = name;
    this.course = course;
  }

  let result = [];
  /* This wrong because the diffirent sort of the elemnts of array : 
  for (let i = 0; i <  courses.length; i++) { // For each Cource
    for (let j = 0; j < courses[i].Students.length; j++) { // For each student array
      for (let x = 0; x < arr.length; x++) {  // for each student input
           if(arr[x] == courses[i].Students[j]){
                let stud = new Result (arr[x] ,courses[i].course);
                result.push(stud);
           }

        }
    }
  }
  console.log(result);
   return result.sort();
   */
  /* Must start with the array of names : 
   for (let j = 0; j < arr.length; j++)  { // For each name
    
      for (let i = 0; i <  courses.length; i++){// For each course
          for (let x = 0; x < courses[i].Students.length; x++) {  // for each student in course
             if( courses[i].Students[x] == arr[j]){
                let stud = new Result (arr[j] ,courses[i].course);
                result.push(stud);
           }

        }
    }
  }
  console.log(result);
   return result.sort();
  */

  arr.forEach((studentS) => {
    courses.forEach((classS) => {
      classS.Students.forEach((studentin) => {
        if (studentS == studentin) {
          //console.log(studentin);
          let stud = new Result(studentS, classS.course);
          result.push(stud);
        }
      });

    });
  });
  return result;

}




module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};