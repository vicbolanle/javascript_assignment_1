

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(toTitleCase("hello world from javascript"));

//Vowel count

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("javascript"));


//reverse string

function reverseString(str) {
return str.split("").reverse().join("");
}

console.log(reverseString("hello"));