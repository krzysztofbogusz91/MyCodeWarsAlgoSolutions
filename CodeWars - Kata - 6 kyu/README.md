List of my 6 kyu kata:
- [Multiples of 3 or 5](#multiples-of-3-or-5)
- [Find the unique number](#find-the-unique-number)
- [Tribonacci Sequence](#tribonacci-sequence)
- [Who likes it](#who-likes-it)
- [Bit counting](#bit-counting)
- [Unique In Order](#unique-in-order)
- [Sum of Digits Digital Root](#sum-of-digits-digital-root)
- [Find The Parity Outlier](#find-the-parity-outlier)
- [Array.diff](#array.diff)


### Multiples of 3 or 5

[Kata URL](https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 Note: If the number is a multiple of both 3 and 5, only count it once.
 
```javascript

function solution(number){
    const placeholder = [];
    for(let i = number-1; i >= 1; i--){
      if( i % 3 === 0 || i % 5 === 0) placeholder.push(i)
    
    }
    
    return placeholder.length === 0 ? 0 : placeholder.reduce((a,b) => a + b );
  
}

```
### Find the unique number

[Kata URL](https://www.codewars.com/kata/find-the-unique-number-1/train/javascript)

 There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

```javascript

function findUniq(arr) {
  return arr.filter((a,i,ar)=> ar.indexOf(a) === ar.lastIndexOf(a))[0];
}

```
### Tribonacci Sequence

[Kata URL](https://www.codewars.com/kata/tribonacci-sequence/train/javascript)

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)

```javascript

function tribonacci(signature,n){
  let counter = 1;
  let target = 0;
  const arr = [];

  while(counter <= n){
    if(typeof signature[counter-1] === "number"){
      arr.push(signature[counter-1]);
    }else{
      let nextInSequence = arr[target] + arr[target + 1] + arr[target + 2];
      arr.push(nextInSequence)
      target++;
    }
    counter ++;
  }
  return arr;
}

```
### Who likes it

[Kata URL](https://www.codewars.com/kata/who-likes-it/train/javascript)

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.


```javascript

function likes(names) {
  switch(names.length){
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  }
}

```

### Bit counting

[Kata URL](https://www.codewars.com/kata/bit-counting/train/javascript)

Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

```javascript

var countBits = function(n) {
  return n.toString(2).split("").filter(a => a !=="0").length;
};

```
### Unique In Order

[Kata URL](https://www.codewars.com/kata/unique-in-order/train/javascript)

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

```javascript


var uniqueInOrder=function(iterable){

if(typeof(iterable)==="string"){
  iterable = iterable.split("");
}

const placeholder = [];

for (let i = 0; i < iterable.length; i++ ){
  if(iterable[i] !== iterable[i+1]){
      placeholder.push(iterable[i]);
  }
}

return placeholder;

}

```
### Sum of Digits Digital Root

[KATA URL](https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript)

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

```javascript

function sum(arr){
  return arr.reduce((a,b)=>parseInt(a)+ parseInt(b));
}

function digital_root(n) {
  if(n<9){
    return n;
  }
  while(n>9){
    n = n.toString().split('');
    n = sum(n);
  }
  
  return n
}

```
### Find The Parity Outlier

[KATA URL](https://www.codewars.com/kata/find-the-parity-outlier/train/javascript)

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
```
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

My soultion:
```javascript

function findOutlier(integers){

const odd = integers.filter(a => a%2==0)

return odd.length > 1 ? integers.filter(a => a%2!=0)[0] : odd[0];
}

```
### Array.diff

[KATA URL](https://www.codewars.com/kata/array-dot-diff/train/javascript)

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.
```
array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
```

```javascript

function array_diff(a, b) {
  let reduceMe = [];
  
  if(b.length === 0){
    return a;
  }
  
  for(let i = 0; i < b.length; i ++){
    reduceMe = a.filter(x => x !== b[i] );
    }
  
  return reduceMe;

}

```
