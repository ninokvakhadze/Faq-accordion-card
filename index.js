const button = document.querySelectorAll(".buttonAndQuestion");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (question[i].classList.contains("open")) {
      answer[i].style.display = "none";
      question[i].classList = "question";
      arrow[i].style.transition = "1s";
      arrow[i].style.transform = "rotate(0deg)";
    } else {
      answer[i].style.display = "block";
      question[i].classList = "question open";
      arrow[i].style.transition = "1s";
      arrow[i].style.transform = "rotate(180deg)";
    }
    for (let k = 0; k < question.length; k++) {
      if (
        question[k].classList.contains("open") &&
        question[k] !== question[i]
      ) {
        answer[k].style.display = "none";
        question[k].classList = "question";
        arrow[k].style.transition = "1s";
        arrow[k].style.transform = "rotate(0deg)";
      }
    }
  });
}
