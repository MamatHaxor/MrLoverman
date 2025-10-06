/**
 * AutoRepo demo - TypeScript
 */
function fib(n: number): number[] {
  let a = 0, b = 1;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

console.log("TS sample length:", fib(20).length);
