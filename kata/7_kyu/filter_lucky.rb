def filterLucky(arr)
  counter = 0
  sevens = []

  loop do
    current_num = arr[counter]

      sevens.push(current_num) if current_num.to_s.include?('7')

    counter += 1
    break if counter >= arr.size
  end

  sevens
end

arr = [1,2,3,4,5,6,7,68,69,70,15,17]
sevens = filterLucky(arr)

p sevens
