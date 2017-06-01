# return the two oldest/oldest ages within the array of ages passed in.


# take an array of random numbers in random order
# sort array
# return the two last numbers (now also the highest) in a a new array
def two_oldest_ages(ages)
  ages.sort.slice(-2, 2)
end
