const collapsibles = document.querySelectorAll(".collaspable");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collaspable--expanded");
  })
);