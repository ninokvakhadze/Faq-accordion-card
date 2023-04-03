const button = document.querySelectorAll(".buttonAndQuestion");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");
let active = 0;
for (let i = 0; 1 < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (active == 0) {
      answer[i].style.display = "block";
      question[i].style.fontWeight = "700";
      arrow[i].style.transition = "1s";
      arrow[i].style.transform = "rotate(180deg)";
      active = 1;
    }
      else {
      answer[i].style.display = "none";
      question[i].style.fontWeight = "400";
      arrow[i].style.transition = "1s";
      arrow[i].style.transform = "rotate(0deg)";
      active = 0;
    }
  });
}
