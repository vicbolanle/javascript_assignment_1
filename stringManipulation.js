// Title case

function titleCase(firstName) {
    return firstName.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}

const firstName = "victor";
let result = titleCase(firstName);
console.log(result);

// Vowel count

function countVowels(person) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of person.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

let person = "alayande";

console.log(countVowels(person));


// reverse string

function reverseString(fruit) {
  return fruit.split("").reverse().join("");
}

let fruit = "banana";

console.log(reverseString(fruit));