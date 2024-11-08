// problem number 3 : 

    function countWordOccurrences(sentence: string, word: string): number {

        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const wordsArray = lowerCaseSentence.split(/\W+/);
        // console.log(wordsArray);
        const count = wordsArray.filter((word) => word === lowerCaseWord).length;

        return count;

    }

    console.log(countWordOccurrences("I love typescript", "typescript"));