# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for smiling face
# - Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# - A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# - Every smiling face must have a smiling mouth that should be marked with either ) or D.
# - No additional characters are allowed except for those mentioned.


def count_smileys(arr)
  count = 0
  if arr.empty?
    return 0
  else
    arr.each do |smiley|
      if smiley =~ /(:|;)-?~?(D|\))/ # regex for matching smileys
        count += 1
      end
    end
  end
  count
end


# --- Tests ---
puts count_smileys([":D",":~)",";~D",":)"]) # => 4
puts count_smileys([":)",":(",":D",":O",":;"]) # => 2
puts count_smileys([";]", ":[", ";*", ":$", ";-D"]) # => 1
puts count_smileys([";", ")", ";*", ":$", "8-D"]) # => 0
