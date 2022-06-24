// Functions

// Function w no params
function sayHello(){
    // Printing out 'Hello' to the console
    console.log('Hello')

    // Returning 'Hello' as a string that can be saved into a variable to be used later in the program
    return 'Hello world'
}

// Prints the console log in the function, as a side effect. No return statement
// const output = sayHello()
// console.log(output)

// Logging to the console what sayHello() returns as a value.
// This also prints 'Hello' bc we are calling/invoking the function again
// console.log(sayHello())



// Function w params
// In the parens go the params => what the function takes as input
function greetByName(name){
    // console.log(name)
    console.log(`Hello, ${name}`)
}


// greetByName('Carlos')
// greetByName('Mars')
// greetByName('Mina')
// greetByName('Shaik')



function coffeeMaker(liquid, powder){
    if(liquid === 'water'){
        if(powder === 'coffee grounds'){
            return 'coffee'
        } else {
            return 'not coffee grounds'
            // console.log('not coffee grounds')
        }
    } else{
        console.log('not water')
    }
}


// const mug = coffeeMaker('water', 'coffee grounds')
// console.log(mug)


// Objects
// Made up of key-value pairs. Each key will describe a property of the object, the value will be just that
const carlos = {
    // key      value
    eyeColor: 'hazel',
    hairColor: 'brown'
}

// Accessing eyeColor using DOT notation
// console.log(carlos.eyeColor)

// Accessing hairColor using BRACKET notation
// console.log(carlos['hairColor'])

// Updating a value in an object

// Left hand of the equal sign: what key we are updating
// Right hand of equal sign: what we are updating the value to
carlos.hairColor = 'blonde'
carlos['eyeColor'] = 'blue'

// console.log(carlos)


// Add a key/value pair to an existing object
carlos.height = '100 feet'
carlos['weight'] = '200 tons'


// Deleting a key/value pair
delete carlos.eyeColor



// Add a new key/value pair that has a space in the key
carlos['eye color'] = 'hazel'


// console.log(carlos['eye color'])


// Complex object
const mcLovin = {
    name: 'McLovin',
    address: {
      street: 'Easy St.',
      unitNumber: 46,
      city: 'Maui',
      state: 'Hawaii',
      zipCode: 99998
    },
    single: true,
    cool: false,
    friends: ['Evan', 'Seth', 'Shaw', 'Edmund'],
    pets: [ 
      {
        name: 'Rex',
        species: 'dog',
        breed: 'Blue Healer',
        age: 84,
        friends: ['Sally', 'Norman']
      },
      {
        name: 'Norma',
        species: 'dog',
        breed: 'Canine',
        age: 24,
        friends: ['Rex', 'Sally']
      },
      {
        name: 'Sally',
        species: 'cat',
        breed: 'Himalayan',
        age: 6,
        friends: ['Norman']
      }
    ],
    greeting: function(){
      console.log(`I am ${mcLovin.name}`)
    }
  }

// Calling a function inside the mcLovin object
// mcLovin.greeting()


// console.log(mcLovin.pets[0].breed)



/**
 * Finds a specific pet named 'Norman'
 * @param {Array} petsArray - the array of pets
 * @returns {Object}
 */

function findNorman(petsArray){
    // Iterate over the petsArray
    // for(let i = 0; i < petsArray.length; i++){
    //     // If the pet's name is 'Norman'
    //     if(petsArray[i].name === 'Norman'){
    //         //    return that pet
    //         return petsArray[i]
    //     }

    // }

    // Using for of loop
    for (const pet of petsArray) {
        if(pet.name === 'Norman'){
            return pet
        }
    }

    return 'Norman is not in the array'
}

console.log(findNorman(mcLovin.pets))







