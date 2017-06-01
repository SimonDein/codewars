# Given an array, find the int that appears an odd number of times.
# There will always be only one integer that appears an odd number of times

def find_it(seq)
 if seq.length == 1
    return seq.first  # return immediatly if only one entry in array
  else
    seq.each do |num| # otherwise look over objects in array
      instances = seq.count(num) # if it appears an odd number of times - return it
      if instances % 2 == 1
        return num
      end
    end
  end
end





puts find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
puts find_it([1,1,2,-2,5,2,4,4,-1,-2,5])
