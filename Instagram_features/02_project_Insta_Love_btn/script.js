let container = document.querySelector("#container")
let icon = document.querySelector("i")

container.addEventListener("dblclick", function(e) {
    e.preventDefault();
    // console.log("Double clicked");
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    
    setTimeout(() => {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1500);

    icon.style.opacity = 0.8;

    setTimeout(() => {
        icon.style.opacity = 0;
    }, 1000);
});


