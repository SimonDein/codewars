def decodeMorse(morseCode)
  letters = []
  morse_letters = morseCode.split(/ /)

  morse_letters.each do |letter|
    if letter == ''
      letters.push(' ')
    else
      letters.push(MORSE_CODE[letter])
    end
  end
  letters.join('').strip.squeeze(' ')
end
