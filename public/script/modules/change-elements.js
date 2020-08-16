export default (function changeElements() {
  const labels = document.querySelectorAll('label[for="color"]');
  const inputColor = document.querySelector("#color");
  const mainTitle = document.querySelector(".test-area");
  const headings = document.querySelectorAll(".text");
  const inputBackground = document.querySelector('input[name="inside"]');
  const inputBorder = document.querySelector('input[name="border"]');
  const divBackground = document.querySelector(".background");
  const clickColor = document.querySelector(".copy-color p");
  const value = document.querySelector(".code-color code");
  const valueBackground = document.querySelector(".code-color");

  function handleColor(event) {
    const hex = event.target.value;

    labels.forEach((label) => {
      label.style.color = hex;
    });

    headings.forEach((heading) => {
      heading.style.color = hex;
    });

    mainTitle.style.color = hex;
    inputBackground.style.backgroundColor = hex;
    inputBorder.style.border = "2px solid" + hex;
    divBackground.style.backgroundColor = hex;
    clickColor.style.color = hex;
    valueBackground.style.backgroundColor = hex;
    value.innerText = hex;
  }
  inputColor.addEventListener("change", handleColor);
})();
