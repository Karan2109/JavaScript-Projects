let elem = document.querySelectorAll(".elem");

// let elem1Img = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (e) => {
//     // Get the bounding rectangle of the parent element
//     let rect = elem1.getBoundingClientRect();

//     // Calculate the cursor's position relative to the parent element
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;

//     // Set the image position relative to the parent element
//     elem1Img.style.left = x + "px";
//     elem1Img.style.top = y + "px";
// });

// elem1.addEventListener("mouseenter", (e) => {
//     elem1Img.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", (e) => {
//     elem1Img.style.opacity = 0;
// });

elem.forEach((val) => {
    val.addEventListener("mouseenter", (e) => {
        // console.log("Entered");
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", (e) => {
        // console.log("Leave");
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", (e) => {
        // console.log("Leave");
        val.childNodes[3].style.left = e.x+"px";
        val.childNodes[3].style.top = e.y+"px";
    });
});