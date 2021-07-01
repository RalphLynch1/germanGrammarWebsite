function loadQuestions(exercise) {
    // Generates the URL for the file containing the questions
    const questions = new Request(`http://localhost:3000/${exercise}Questions.json`);

    // Fetches the question file
    fetch(questions)
    .then(response => response.json())
    .then(data => {
        // Inserts each question into an ordered list
        for (let i = 0; i < data.questions.length; i++) {
            // 1 is added to i because the ids are off by one.
            document.getElementById(`question${i + 1}`).innerHTML = data.questions[i];
        }
    })
}