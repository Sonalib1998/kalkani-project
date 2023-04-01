const number = parseInt(prompt('User Input: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Program Output:');
console.log(n1);
console.log(n2); 
nextTerm = n1 + n2;
while (nextTerm <= number) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}