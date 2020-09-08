//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++){
  j = i + 1
  if (str[i] === str[j]) {
    return false 
  }
  return true 
  }

}

str1 = 'aadc'; //should be false
str2 = 'abcd' //should be true
str3 = 'mdjq' //should be true 

console.log(isUnique(str1))
console.log(isUnique(str2))
console.log(isUnique(str3))

//What is time and space complexity of this? 
//Time --> O(n) -->iterating through the length of the string 
//Space --> O(1)