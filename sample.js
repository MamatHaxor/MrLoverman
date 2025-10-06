/**
 * AutoRepo demo - JavaScript
 */
function fib(n) {
  let a = 0, b = 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

function stats(arr) {
  return { len: arr.length, sum: arr.reduce((s,x)=>s+x,0), max: Math.max(...arr) };
}

const seq = fib(25);
console.log("JS seq stats:", stats(seq));
