const words = {
    adjectives : ['abhorrent','Abrasive','Aloof','Caustic','Defamatory','Incandescent','Irksome','Judicious','Nondescript','Obtuse','Ruminative','Serpentine'],
    verbs : ['Guide','Bash','Blab','Broadcast','Mystify','Notify','Garble','Wreck','Wrest','Snarl','Slink','Inspect','sniff'],
    nouns : ['Snickers bar','spiral-sliced ham','gym shorts','canopy','truck','twinkie','pizza','flat-brimmed hat','ukulele','octopus','dog'],
    characters : ['Baby Yoda','Mark Allen','Louis Armstrong','Eddie Van Halen','Dave Grohl','Spongebob','Uncle Pete','LeBron James'],
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomWord = (arr, wordCase) => {
    let idx = Math.floor(Math.random() * arr.length);
    if(wordCase === "upper") {
        return capitalizeFirstLetter(arr[idx]);
    } else {
        return arr[idx].toLowerCase();
    }
}

const sentences = [
    `<CHARACTERS> wishes to <verbs> the <adjectives> <nouns>.`,
    `One time, I saw the <adjectives> <nouns> right there next to <CHARACTERS>. I chose to <verbs>.`,
    `Take a moment to <verbs> about <CHARACTERS>. What would he do with the <adjectives> <nouns>?`,
    `<ADJECTIVES> <nouns>! Sufficient to make even <CHARACTERS> <verbs>.`,
    `<CHARACTERS> <verbs>s <adjectives> <nouns>s.`
]

const getRandomMessage = () => {
    let idx = Math.floor(Math.random() * sentences.length);
    let sentence = sentences[idx];
    for (const partOfSpeech in words) {
        sentence = sentence.replace(`<${partOfSpeech}>`, getRandomWord(words[partOfSpeech], 'lower'));
        sentence = sentence.replace(`<${partOfSpeech.toUpperCase()}>`, getRandomWord(words[partOfSpeech], 'upper'));
    }
    return sentence;
}

const displayMessage = () => {
    document.getElementById('message').innerHTML = getRandomMessage();
}

// console.log(getRandomMessage());