function fibonacci(num) {
    let answer = [];
    let x = 0;
    let y = 1;
    let z;

    answer.push(x);
    answer.push(y);

    let i = 2;
    while(i < num) {
        z = x + y;
        x = y;
        y = z;
        answer.push(z);
        i++;
    }
    return answer;
}

var num = 8;
console.log(fibonacci(num));

// Recursion version
function fibonacciRecursion(n) {
    if(n == 1) return [0];
    else if(n == 2) return [0, 1];
    else {
        const prev = fibonacciRecursion(n - 1);
        const next = prev[prev.length - 1] + prev[prev.length - 2];
        return [...prev, next];
    }
}

console.log(fibonacciRecursion(8));