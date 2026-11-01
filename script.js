const openButton = document.querySelector("#open-card");
const readAgainButton = document.querySelector("#read-again");
const card = document.querySelector("#birthday-card");
const petalField = document.querySelector("#petal-field");

function releasePetals() {
  petalField.replaceChildren();

  for (let index = 0; index < 14; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${4 + Math.random() * 92}%`;
    petal.style.setProperty("--duration", `${3.6 + Math.random() * 2.8}s`);
    petal.style.setProperty("--delay", `${Math.random() * 0.8}s`);
    petal.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
    petalField.append(petal);
  }
}

function openCard() {
  document.body.classList.add("is-open");
  card.setAttribute("aria-hidden", "false");
  releasePetals();

  window.setTimeout(() => {
    card.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 500);
}

function closeCard() {
  document.body.classList.remove("is-open");
  card.setAttribute("aria-hidden", "true");
  window.scrollTo({ top: 0, behavior: "smooth" });

  window.setTimeout(() => openButton.focus(), 450);
}

openButton.addEventListener("click", openCard);
readAgainButton.addEventListener("click", closeCard);
