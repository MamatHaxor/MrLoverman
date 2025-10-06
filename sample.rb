#!/usr/bin/env ruby
# AutoRepo demo - Ruby
def fib(n)
  a, b = 0, 1
  out = []
  n.times do
    out << a
    a, b = b, a + b
  end
  out
end

seq = fib(20)
puts "Ruby seq size: #{seq.size}"
seq.each_with_index { |v,i| puts "#{i.to_s.rjust(2)}: #{v}" }
