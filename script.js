document.querySelector('#submit-btn').addEventListener('click', function () {
    console.log("El botón ha sido clicado.");

    let correctAnswers = 0;
    let totalQuestions = 3;

    // Pregunta 1
    let question1 = document.querySelector('input[name="question1"]:checked');
    if (question1 && question1.value === "correcta") {
        correctAnswers++;
    }

    // Pregunta 2
    let question2 = document.querySelector('input[name="question2"]:checked');
    if (question2 && question2.value === "correcta") {
        correctAnswers++;
    }

    // Pregunta 3
    let question3 = document.querySelector('input[name="question3"]:checked');
    if (question3 && question3.value === "correcta") {
        correctAnswers++;
    }

    console.log("Respuestas correctas: " + correctAnswers);

    // Mostrar el resultado
    let incorrectAnswers = totalQuestions - correctAnswers;

    document.querySelector('#result').innerHTML = `
        <p>Has acertado ${correctAnswers} de ${totalQuestions} preguntas.</p>
        <p>Has fallado ${incorrectAnswers} preguntas.</p>
    `;
});
