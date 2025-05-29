
const questions = [
  {
    question: "ما هو ناتج 5 + 3؟",
    answers: ["6", "8", "9"],
    correct: 1
  },
  {
    question: "أي الأشكال يحتوي على 3 أضلاع؟",
    answers: ["مربع", "مثلث", "دائرة"],
    correct: 1
  },
  {
    question: "كم ثانية في الدقيقة الواحدة؟",
    answers: ["30", "60", "90"],
    correct: 1
  }
];

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });
  document.getElementById("result").innerText = "نتيجتك: " + score + " من " + questions.length;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = "<p>" + q.question + "</p>" + q.answers.map((a, j) =>
      `<label><input type="radio" name="q${i}" value="${j}"> ${a}</label><br>`).join("");
    container.appendChild(div);
  });
});
