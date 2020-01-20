// Fizz Buzz Problem: 
/* 
Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

// Solution 
function FizzBuzz (num) {
  for (i = 1; i<= num; i ++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 5 === 0) console.log('Buzz');
    else if (i % 3 === 0) console.log('Fizz');
    else console.log(i);
  }
  // shortest way of the same Solution
  // for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
}

// Test Fizz Buzz
FizzBuzz(50);
