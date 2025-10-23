const box = document.getElementById("share");
const limit = 1000;

box.addEventListener("input", () => {
  if (box.value.length > limit) {
    box.value = box.value.slice(0, limit);
  }
});

const textArea = document.getElementById("share")
let words = localStorage.getItem('words') || '';
textarea.value = words;
textarea.addEventListener('input', () => {
    words = textarea.value;
    localStorage.setItem('words', words);
});
