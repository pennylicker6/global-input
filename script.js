const box = document.getElementById("share");
const limit = 1000;

box.addEventListener("input", () => {
  if (box.value.length > limit) {
    box.value = box.value.slice(0, limit);
  }
});
