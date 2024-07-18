//EXERCISE 1:


const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };
  

// console.log(person.address["city"]);
// console.log(person.address.city);

// console.log(person.hobbies[1]);

//EXERCISE 2:

const cohort = {
    name: "May2024",
    id: 1234,
    students : ["Glory", "Hannah", "Marya", "Jamie", "Sophia"]
};

// console.log(cohort.id);
// console.log(cohort.name);
// console.log(cohort.students.length);

function sentance(object){
    console.log(object.id + " - " + object.name + " - " + object.students.length + " students in this cohort")
};

sentance(cohort);