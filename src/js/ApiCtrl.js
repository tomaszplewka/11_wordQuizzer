import ApiCtrlConfig from './ApiCtrlConfig';
import regeneratorRuntime from "regenerator-runtime";
// 
// Api Controller
// 
const ApiCtrl = (function(ApiCtrlConfig) {
    const apiParams = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${ApiCtrlConfig.apiKey.key}`,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    };
    const questionsTemplate = [
        "What is the definition of $?",
        "How would you define $?",
        "How to define $?",
        "What is the meaning of $?",
        "What does $ mean?"
    ];
    const postData = async function(data, endpoint) {
        return await (
            fetch(endpoint, {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }));
    };
    const fetchQuizzes = async function(endpoint) {
        return await (
            fetch(endpoint, {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }));
    };
    const getAllWords = async function(pageNum = 1) {
        return await (
            fetch('https://wordsapiv1.p.rapidapi.com/words/?'+ new URLSearchParams({
                letterPattern: '^[A-z]{2,}$',
                page: pageNum
            }), apiParams)
            .then(response => {
                if (!response.ok) { throw new Error(response.statusText) }
                return response.json();
            }));
    };
    const getWordsByRandomPages = async function(numberOfQuestions, numOfAnswers) {
        // Get all words
        return await (
            getAllWords()
            .then(doc => {
                // Total number of pages
                let pages = doc.results.total;
                // Generate random pages
                let randomPages = [];
                while (randomPages.length < numberOfQuestions * numOfAnswers) {
                    const r = Math.floor(Math.random() * Math.ceil(pages / 100));
                    if (randomPages.indexOf(r) === -1) {
                        randomPages.push(r);
                    }
                }
                // Add promises in a loop
                let promises = [];
                for (let i = 0; i < randomPages.length; i++) {
                    promises.push(getAllWords(randomPages[i]));
                }
                return Promise.all(promises);
            }));
    };
    const getWordDefinitions = async function(words) {
        let i = 0
        let wordsDefinitions = {};
        // Loop to get all words specified in words array
        while (i < words.length) {
            const word = words[i];
            // Fetch word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', apiParams);
            // Convert to json
            if (!response.ok) { throw new Error(response.statusText) }
            const doc = await response.json();
            // If fetched word has definition, add it to wordDefinitions object
            if (doc.definitions.length) {
                wordsDefinitions[word] = doc.definitions;
            }
            i++;
        }
        return wordsDefinitions;
    }
    // const getRandomWordDefinitions = async function(missingWords, oldWordDefinitions) {
    //     let wordsDefinitions = {};
    //     // Loop till word with definition is found
    //     while (true) {
    //         // Fetch random word
    //         const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
    //             random: 'true'
    //         }), apiParams);
    //         if (!response.ok) { throw new Error(response.statusText) }
    //         const doc = await response.json();
    //         // Get word field
    //         const word = doc.word;
    //         // Check if fetched word is unique
    //         if (!Object.keys(oldWordDefinitions).includes(word)) {
    //             // Fetch definition for this word
    //             const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/' + word + '/definitions', apiParams);
    //             if (!response.ok) { throw new Error(response.statusText) }
    //             const doc = await response.json();
    //             // If fetched word has definition, add it to wordDefinitions object
    //             if (doc.definitions.length) {
    //                 wordsDefinitions[word] = doc.definitions;
    //             }
    //             // If wordDefinitions has specified length, break from the loop
    //             if (Object.keys(wordsDefinitions).length === missingWords) {
    //                 break;
    //             }
    //         }
    //     }
    //     return wordsDefinitions;
    // };
    const getRandomWordDefinitions = async function(numberOfQuestions, numberOfAnswers) {
        let words = [];
        let questions = {};
        let answers = [];
        // Loop till appropriate number of words with definitions is found
        let i = 0;
        while (true) {
            // Fetch random word
            const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?' + new URLSearchParams({
                random: 'true'
            }), apiParams);
            if (!response.ok) { throw new Error(response.statusText) }
            const doc = await response.json();
            // Get word field
            const word = doc.word;
            // Check if word is at least 2-chars long
            if (word.length > 2) {
                // Check if fetched word is unique
                if (!words.includes(word)) {
                    // Check if word has definitions
                    const definitions = doc.results;
                    if (definitions !== undefined && definitions.length) {
                        // Assign definition
                        let wordDefinition;
                        let wordPartOfSpeech;
                        if (i % numberOfAnswers) {
                            // There is remainder -- assign remaining answers
                            if (definitions.length > 1) {
                                // More than 1 definition -- choose random one
                                const r = Math.floor(Math.random() * definitions.length);
                                wordDefinition = definitions[r].definition;
                            } else {
                                // Only one definition
                                wordDefinition = definitions[0].definition;
                            }
                            // Add remaining answer
                            answers.push(wordDefinition);
                        } else {
                            // No remained -- assing correct answer
                            // There are definitions
                            if (definitions.length > 1) {
                                // More than 1 definition -- choose random one
                                const r = Math.floor(Math.random() * definitions.length);
                                wordDefinition = definitions[r].definition;
                                wordPartOfSpeech = definitions[r].partOfSpeech;
                            } else {
                                // Only one definition
                                wordDefinition = definitions[0].definition;
                                wordPartOfSpeech = definitions[0].partOfSpeech;
                            }
                            // Add question
                            questions[word] = {};
                            // Get random question template
                            const r = Math.floor(Math.random() * questionsTemplate.length);
                            // Create question
                            questions[word].question = questionsTemplate[r].replace("$", `${word} (${wordPartOfSpeech})`);
                            // Add correct answer
                            questions[word].correctAnswer = wordDefinition;
                            // Update words array
                            words.push(word);
                        }
                        i--;
                    }
                }
            }
            // If it has specified length, break from the loop
            if (words.length === numberOfQuestions && answers.length === numberOfQuestions) { break; }
        }
        const results = { questions, answers};
        return results;
    };
    return {
        postData,
        fetchQuizzes,
        getRandomWordDefinitions
    }
})(ApiCtrlConfig);
export default ApiCtrl;