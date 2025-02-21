let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");

for(list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        //right box
        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            e.preventDefault();
            rightBox.appendChild(selected);
            selected = null;
        });

        // left box
        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e) {
            e.preventDefault();
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}
