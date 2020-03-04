document.addEventListener("DOMContentLoaded", function () {

  const $form = document.getElementById("form");
  const $input = document.getElementById("input");
  const $btnSubmit = document.querySelector(".form__btn_s");
  const $btnReset = document.querySelector(".form__btn_r");

  const oldValue = localStorage.getItem("num23");
  if (oldValue) {
    let html = document.createElement("p");
    html.innerText = oldValue;
    html.classList.add("old-result");
    html.style.color = oldValue % 2 == 0 ? "red" : "green";
    $form.insertAdjacentElement("beforebegin", html);
  }

  $form.addEventListener("submit", function (e) {
    localStorage.setItem("num23", $input.value);
    $input.value = "";
    $btnSubmit.disabled = true;
  });
  $form.addEventListener("reset", function () {
    delete localStorage["num23"];
    $btnSubmit.disabled = true;
  });
  $input.addEventListener("input", function () {
    if (this.value == "") {
      $btnSubmit.disabled = true
    } else {
      $btnSubmit.disabled = false;
    }
  });
});