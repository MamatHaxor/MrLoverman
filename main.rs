fn fib(n: usize) -> Vec<u128> {
    let mut a: u128 = 0;
    let mut b: u128 = 1;
    let mut v = Vec::new();
    for _ in 0..n {
        v.push(a);
        let tmp = a + b;
        a = b; b = tmp;
    }
    v
}

fn main() {
    let s = fib(15);
    for (i, v) in s.iter().enumerate() {
        println!("{:02}: {}", i, v);
    }
}
