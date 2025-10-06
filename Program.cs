using System;
class Program {
    static long[] Fib(int n) {
        long a = 0, b = 1;
        long[] outArr = new long[n];
        for (int i = 0; i < n; i++) {
            outArr[i] = a;
            long tmp = a + b;
            a = b; b = tmp;
        }
        return outArr;
    }
    static void Main() {
        var seq = Fib(15);
        Console.WriteLine("C# seq length: " + seq.Length);
        for (int i = 0; i < seq.Length; i++) Console.WriteLine($"{i:00}: {seq[i]}");
    }
}
