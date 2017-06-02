# Find the number with the most digits.
# If two numbers in the argument array have the same number of digits, return the first one in the array.


def find_longest(arr)
  longest_num = 0   # current longest number
  most_digits = 0   # current most digits found in a number in the array

  arr.each do |num|
    digits_in_num = num.to_s.length
    if digits_in_num <= most_digits   # if length of the current number is <= longest number yet - next
      next
    else      # but if length is > than any other number we have seen yet -
      longest_num = num     # set this num as new longest_num
      most_digits = digits_in_num     # set the length of this num as the new standard to compare against
    end
  end
  longest_num
end
