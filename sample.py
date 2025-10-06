#!/usr/bin/env python3
"""
AutoRepo demo - Python
"""
def fib(n):
    a, b = 0, 1
    out = []
    for _ in range(n):
        out.append(a)
        a, b = b, a + b
    return out

def stats(arr):
    return {"len": len(arr), "sum": sum(arr), "max": max(arr)}

if __name__ == "__main__":
    seq = fib(25)
    s = stats(seq)
    print(f"Sequence len={s['len']}, sum={s['sum']}, max={s['max']}")
