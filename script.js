
let boxes = document.querySelectorAll("#parent .image");

let draggedBox = null;

boxes.forEach((box) => {
  box.addEventListener("dragstart", function () {
    draggedBox = this;
  });

  box.addEventListener("dragover", function (evt) {
    evt.preventDefault();
  });

  box.addEventListener("drop", function (evt) {
    evt.preventDefault();

    if (draggedBox && draggedBox !== this) {
      let temp = draggedBox.style.backgroundImage ||
        getComputedStyle(draggedBox).backgroundImage;

      draggedBox.style.backgroundImage =
        this.style.backgroundImage ||
        getComputedStyle(this).backgroundImage;

      this.style.backgroundImage = temp;
    }

    draggedBox = null;
  });
});

