let dog = {
  breed: "Border Collie",
  sound: "Wooh",
  getBreed: () => { 
      return this.breed;
  },
  getSound: function() {
      return this.sound;
  }
};







//========different ways to access a object ========

var student = {
    name : "Akshay",
    id: 1
}

console.log(student.name);
console.log(student["name"]);











const obj = {
    name: 'Joe',
    food: 'cake'
  };
  
  const { name, food } = obj;
  
  console.log(name, food);


  // ========================= spread ==============================

const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);
console.log(max);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

const obj = { name: "krishna" }
const obj1 = { ...obj, country: "Canada" }
console.log(obj1);



// ===================== Destructuring ===========================

const obj = {
    name: 'Joe',
    food: 'cake'
  };
  
  const { name, food } = obj;


  console.log(name, food);
  

  // ===================== Destructuring   Alias variable ===========================
  const property = 'name';
  const obj = {
    name: 'Joe',
    food: 'cake'
  };
  
  const { name: myName, food: myFood } = obj;

  // const { [property]: myName, food: myFood } = obj;
  
  console.log(myName, myFood);
  
  // destructuring can be (and often is) used directly for extracting parameters passed to a function.
  
  const person = {
    name: 'Eddie',
    age: 24
  };
  
  function introduce({ name, age }) {
    console.log(`I'm ${name} and I'm ${age} years old!`);
  }
  
  introduce(person);
  
  
  

