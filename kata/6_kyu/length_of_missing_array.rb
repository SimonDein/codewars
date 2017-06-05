# --------------------------------------------
# !!ISSUE with tests
# check for updates on the Code Wars thread!
# --------------------------------------------

def getLengthOfMissingArray(array_of_arrays)
  if array_of_arrays.empty? || array_of_arrays == nil || array_of_arrays.all? {|a| a.empty? || a.nil?}
    return 0
  end

  lengths = array_of_arrays.map {|a| a.length}
  lengths.sort!

  length = lengths.delete_at(0)
  missing_length = 0

  lengths.each do |l|
    if l > length.next
      missing_length = length.next
    else
      length = l
    end
  end
  return missing_length
end






puts getLengthOfMissingArray([[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) #=> 3
puts getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) # => 2
puts getLengthOfMissingArray([[ false ], [ false, false, false ]])
puts getLengthOfMissingArray([[ nil ], [ nil, nil, nil ]])
puts getLengthOfMissingArray([ ])
