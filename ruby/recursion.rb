#recursion homework

#sum_to
#Write a function sum_to(n)
#that uses recursion to
#calculate the sum from 1 to n (inclusive of n)

def sum_to(n)
  return nil if n <= 0 #negatives and 0
  return 1 if n == 1 #base step
  #inclusive step 1 + sum_to(n)
  n + sum_to(n - 1)
end

#add_numbers
#Write a function add_numbers(nums_array)
#that takes in an array of Fixnums
#returns the sum of those numbers

def add_numbers(nums_array)
  return nums_array.first if nums_array.length <= 1

  nums_array.pop + add_numbers(nums_array)
end

#Gamma function
# Gamma Function is defined Γ(n) = (n-1)!

def gamma_func(n)
  return nil if n < 1
  return 1 if n == 1
  gamma_func(n - 1) * (n - 1)
end
