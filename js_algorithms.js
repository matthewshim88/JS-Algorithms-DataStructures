//** Verify if a number is a Prime number

function isPrime(num){
  var divisor = 2;

  while(num > divisor){
    if(num % divisor == 0){
      return false;
    }else{
      divisor++;
    }
    return true;
  }
}
// console.log(isPrime(137));
// console.log(isPrime(240000));


//** Find all Prime Factors of a number
function primeFactors(num){
  var factors = [];
  var divisor = 2;

  while(num>2){
    if(num % divisor == 0){
      factors.push(divisor);
      num = num/divisor;
    }else{
      divisor++;
    }
  }
  return factors;
}
// console.log(primeFactors(69));


//** Get the nth Fibonacci number - ITERATIVE SOLUTION
function fibonacci(n){
  var fibo = [0,1];

  if(n <= 2 ){
    return 1;
  }
  for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo[n];
}
// console.log(fibonacci(12));


//** Get nth Fibonacci - RESURSIVE SOLUTION
function fib_rec(num){
  if(num <= 1){
    return num;
  }else{
    return fib_rec(num-1) + fib_rec(num-2);
  }
}
// console.log(fib_rec(12));


//** remove Duplicates in an Array
function removeDupes(arr){
  var exists = {};
  var newArr = [];
  var val;

  for(var i = 0; i<arr.length; i++){
    val = arr[i];
    if(!exists[val]){
      newArr.push(val);
      exists[val] = true;
    }
  }
  return newArr;
}
// console.log(removeDupes([1,3,3,3,1,5,6,7,8,8,1]));


//check if string is Palindrome
function isPalindrome(str){
  var i, len = str.length;

  for(i = 0; i<len/2; i++){
    if(str[i] !== str[len -1 -i]){
      return false
    }
    return true;
  }
}
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('toyota'));


//** FIND PERMUTATIONS OF A STRING
function permutations(str){
  var arr = str.split(''),
      len = arr.length,
      perms = [],
      rest,
      picked,
      restPerms,
      next;

  if(len==0){
    return [str];
  }

  for(var i=0; i<len; i++){
    rest = Object.create(arr);
    picked = rest.splice(i, 1);
    restPerms = permutations(rest.join(''));

    for(var j = 0, jLen = restPerms.length; j< jLen; j++){
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }
  return perms;
}
// console.log(permutations('ABCD'));


//** Reverse words in a sentence
function reverseWords(str){
  var rev = [],
      wordLen = 0;

  for(var i = str.length-1; i >=0; i--){
    if(str[i]== ' ' || i ==0){
      rev.push(str.substr(i, wordLen+1));
      wordLen = 0;
    }else{
      wordLen++;
    }
  }
  return rev.join(' ');
}
// console.log(reverseWords("Hello my name is Bob!"));


// reverse words with built in .split()
function revWords(str){
  return str.split(' ').reverse();
}
// console.log(revWords("Hello my name is Bob!"));

//** reverse word in place (reverse each individual word, same order)
function revWordInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

// console.log(revWordInPlace("Hello my name is Bob!"));
