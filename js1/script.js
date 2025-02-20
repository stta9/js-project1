document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-input");
    const letterCount = document.getElementById("letter-count");
    const wordCount = document.getElementById("word-count");
    const sentenceCount = document.getElementById("sentence-count");

    textArea.addEventListener("input", function () {
        const text = textArea.value;

        letterCount.textContent = countLetters(text);
        wordCount.textContent = countWords(text);
        sentenceCount.textContent = countSentences(text);
    });

    function countLetters(text) {
        return text.replace(/[^a-zA-Z]/g, "").length;
    }

    function countWords(text) {
        const words = text.trim().match(/\b\w+\b/g);
        return words ? words.length : 0;
    }

    function countSentences(text) {
        const sentences = text.match(/[^.!?]+[.!?]/g); 
        return sentences ? sentences.length : 0;
    }
});
