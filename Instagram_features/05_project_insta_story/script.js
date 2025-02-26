let arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
        story: "https://plus.unsplash.com/premium_photo-1664451820380-cbdc25cd8fa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://images.unsplash.com/photo-1664640581262-5ff473989454?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1668165258082-3ecb8c6aa5af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1670176620171-c948663efe49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        story: "https://plus.unsplash.com/premium_photo-1668165257976-13771a2fea0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
    },
];

let storiyan = document.querySelector("#storiyan")
let clutter = "";
arr.forEach((elem, idx) => {
    // console.log(elem, idx);
    clutter += `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", (dets) => {
    document.querySelector("#full-screen").style.display =  "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#full-screen").style.display =  "none";
    }, 2000);
});
