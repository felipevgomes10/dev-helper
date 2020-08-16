export default (function btnCreator() {})();

const form = document.getElementById("config");
const btn = document.querySelector(".btn");
const cssText = document.querySelector(".css");

function handleChanges(event) {
  const name = event.target.name;
  const value = event.target.value;

  showChanges[name](value);
  showCode();
  saveValues(name, value);
}
form.addEventListener("change", handleChanges);

const showChanges = {
  element: btn,
  text(values) {
    this.element.innerText = values;
  },
  color(values) {
    this.element.style.color = values;
  },
  backgroundColor(values) {
    this.element.style.backgroundColor = values;
  },
  border(values) {
    this.element.style.border = values;
  },
  boxShadow(values) {
    this.element.style.boxShadow = values;
  },
  borderRadius(values) {
    this.element.style.borderRadius = values + "px";
  },
  height(values) {
    this.element.style.height = values + "rem";
  },
  width(values) {
    this.element.style.width = values + "rem";
  },
  fontSize(values) {
    this.element.style.fontSize = values + "rem";
  },
  padding(values) {
    this.element.style.padding = values + "rem";
  },
  fontFamily(values) {
    this.element.style.fontFamily = values;
  },
};

function showCode() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>") + "</span>";
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    form.elements[propertie].value = localStorage[propertie];
    showChanges[propertie](localStorage[propertie]);
  });
  showCode();
}
setValues();
