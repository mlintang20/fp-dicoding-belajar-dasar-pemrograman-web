function switch_mode() {
  // toggle light/dark mode
  // let main = document.getElementById("main");
  let main = document.querySelector("main");
  let card = document.getElementsByClassName("card");

  main.classList.toggle("dark-main");
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("dark-card");
  }

  // switch tulisan light/dark mode
  let x = document.getElementById("switch");
  if (x.innerHTML === "Light Mode") {
    x.innerHTML = "Dark Mode";
  } else {
    x.innerHTML = "Light Mode";
  }
}
