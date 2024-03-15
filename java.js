// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Object representing a person
  const person = {
    name: "Massil",
    age: 21,
    email: "benbaramassil5@gmail.com"
  };
  
  // Function to filter people over 30 years old from an array of person objects
  function filterPeopleOver30(peopleArray) {
    return peopleArray.filter(person => person.age > 30);
  }
  
  // Stack data structure implementation using an array
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Queue data structure implementation using an array
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Function to remove vowels from a string
  function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }
  
  // Function to return unique elements from two arrays
  function mergeAndUnique(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    return Array.from(new Set(mergedArray));
  }
