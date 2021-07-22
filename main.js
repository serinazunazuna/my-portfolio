const dance = document.getElementById("dance");
const pro = document.getElementById("pro");
const shima = document.getElementById("shima");
const display = document.getElementById("answer");

dance.onclick = function () {
  display.textContent = "勉強や作業のお供🍃";
};

pro.onclick = function () {
  display.textContent = "スポーツのあと無性に飲みたくなる😹";
};

shima.onclick = function () {
  display.textContent = "今日も頑張ったあなたに！！✨";
};
