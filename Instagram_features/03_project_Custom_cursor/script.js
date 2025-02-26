let main = document.querySelector('#main');
let cursor = document.querySelector('.cursor');

main.addEventListener("mousemove", function(e) {
     cursor.style.left = e.clientX + "px";
     cursor.style.top = e.clientY + "px";
});