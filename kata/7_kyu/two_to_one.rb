# Take 2 strings s1 and s2 including only letters from ato z
# Return a new sorted string, the longest possible, containing distinct letters

def longest(a1, a2)
  (a1 + a2).split("").uniq.sort.join
end
