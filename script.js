```javascript
// your code here

let boxes = document.querySelectorAll("#container div");

let draggedBox = null;

boxes.forEach((box) => {

    box.addEventListener("dragstart", function () {
        draggedBox = this;
    });

    box.addEventListener("dragover", (evt) => {
        evt.preventDefault();
    });

    box.addEventListener("drop", function (evt) {
        evt.preventDefault();

        if (draggedBox !== this) {
            let temp = draggedBox.style.backgroundImage;

            draggedBox.style.backgroundImage = this.style.backgroundImage;

            this.style.backgroundImage = temp;
        }
    });

});
```
