const add  = document.querySelector("#add")
var check = 0;
document.getElementById("add").onclick = function() {
    if (check == 0) {
        const heading = document.getElementById("h5-text")
        heading.textContent="Friends"
        heading.style.color="green"
        add.innerHTML = "Remove Friend"
        // console.log("We are now Friends!")
        check = 1;
    } else {
        const heading = document.getElementById("h5-text")
        heading.textContent="Stranger"
        heading.style.color="red"
        add.innerHTML = "Add Friend"
        // console.log("Un-friend")
        check = 0;
    }
};

// document.getElementById("remove").onclick = function() {
//     const heading = document.getElementById("h5-text")
//     heading.textContent="Stranger"
//     heading.style.color="darkmagenta"
// };



