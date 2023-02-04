let postTitle, postBody, newPost, savePost,
title, body, form, bg, mode;

newPost = document.getElementById("new");
title = document.getElementById("titleInput");
body = document.getElementById("bodyInput");
mode = document.getElementById("theme");
bg = document.body;

mode.addEventListener("click", function() {
    if(bg.classList.contains("bg-white")){
        bg.classList.replace("bg-white", "bg-black");
        bg.classList.add("text-white");
    } else if(bg.classList.contains("bg-black")) {
        bg.classList.replace("bg-black", "bg-white");
        bg.classList.remove("text-white");
    }
})
newPost.addEventListener("click", function() {
    form = document.getElementById("form");
    form.classList.replace("hidden", "block");
});

title.addEventListener("input", function(e){
    e.preventDefault();
    postTitle = document.getElementById("title");
    postTitle.innerText = e.target.value;
});

body.addEventListener("input", function(e){
    e.preventDefault();
    postBody = document.getElementById("article");
    postBody.innerText = e.target.value;
});
