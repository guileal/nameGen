const vowels = ["a", "e", "i", "o", "u"]
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "w", "z"]

export function wordGenerator1(syllableAmount) {
    let newWord = ''
    for (let i = 0; i < syllableAmount; i++) {
        newWord += syllableGenerator()
    }

    return newWord
}

function syllableGenerator() {
    let randomNumber = randomNumberPositionInVector(vowels)
    let randomVowel = vowels[randomNumber]

    randomNumber = randomNumberPositionInVector(consonants)
    let randomConsonant = consonants[randomNumber]

    return randomConsonant + randomVowel
}

function randomNumberPositionInVector(vector) {
    let min = 0;
    let max = Math.floor(vector.length);
    return Math.floor(Math.random() * (max - min)) + min;
}


// console.log(wordGenerator(2))