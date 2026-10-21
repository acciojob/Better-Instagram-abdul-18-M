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

    if (draggedBox !== this) {
      let draggedImage = getComputedStyle(draggedBox).backgroundImage;
      let targetImage = getComputedStyle(this).backgroundImage;

      draggedBox.style.backgroundImage = targetImage;
      this.style.backgroundImage = draggedImage;
    }
  });
});

