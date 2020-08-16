export default (function changeBackground() {
  const inputColorBackground = document.querySelector("#color-2");
  const leftSide = document.querySelector(".left-side");
  const value2 = document.querySelector(".code-color-2 code");
  const valueBackground2 = document.querySelector(".code-color-2");

  function handleBackground(event) {
    const hex = event.target.value;

    leftSide.style.backgroundColor = hex;
    valueBackground2.style.backgroundColor = hex;
    value2.innerText = hex;
  }
  inputColorBackground.addEventListener("change", handleBackground);
})();
