let text = document.getElementById("text");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const properCase = document.getElementById("proper-case");
const sentenceCase = document.getElementById("sentence-case");
const saveTextFile = document.getElementById("save-text-file");

upperCase.addEventListener("click", () => {
  text.value = text.value.toUpperCase();
});

lowerCase.addEventListener("click", () => {
  text.value = text.value.toLowerCase();
});

properCase.addEventListener("click", () => {
  let words = text.value.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  text.value = words.join(" ");
});

sentenceCase.addEventListener("click", () => {
  let sentences = text.value.toLowerCase().split(". ");
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
  }
  text.value = sentences.join(". ");
});

function download(filename, text) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

saveTextFile.addEventListener("click", function () {
  let outputText = text.value;
  download("text.txt", outputText);
});
