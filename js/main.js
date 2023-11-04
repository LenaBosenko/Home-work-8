// home work 8 task 1

const cycleNum = alert ([10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20]);

// home work 8 task 2
 const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20]

function numInSquareArr(array) {
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
    }
    return array;
}
console.log(numInSquareArr(numbers)) 

// home work 8 task 3
 const numWhichNeedMult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numMult(arr) {
    for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 7;
    }
    return arr;
}
console.log(numMult(numWhichNeedMult)) 


// home work 8 task 4
 const sumNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function sumOfNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i];
    }
    return arr;
}
console.log(sumOfNumbers(sumNum)) 

// home work 8 task 5
 const numbersForMult =  [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

function multOfThisNumbers(array) {
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
    }
    return array;
}
console.log(multOfThisNumbers(numbersForMult)) 


// home work 8 task 6
  let sumAverage = 0;

 for (let i = 0; i <= 500; i++) {
    sumAverage += i;
 }
 console.log(sumAverage); 

// home work 8 task 7

for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} 

// home work 8 task 8

 for (let i = 100; i <= 200; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}



// home work 8 task 9,10,11

let naturalNum = +prompt('Enter some prime number' );
 alert (`You enter number: ${naturalNum} `);
let count = 0,
  summ = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    alert (`Divisor of this number is: ${i} `);

    if (i % 2 === 0) {
      count++;
      summ += i;
    }
  }
}
alert (` Number of even divisor: ${count} `);
alert (`Sum of even divisor : ${summ} `); 

//home work 8 task 12

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <=10; j++) {
    number = i * j
    console.log(" " + number + " ");
  }
}
