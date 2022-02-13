const passwordForm = document.querySelector("#passwordForm");
const passwordInput = passwordForm.querySelector("input");

function check(event) {
  event.preventDefault();
  const currentValue = passwordInput.value;
  if (currentValue == "fhranfdl12!") {
    window.location.href = "./admin.html";
  } else {
    alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
  }
}

passwordForm.addEventListener("submit", check);
