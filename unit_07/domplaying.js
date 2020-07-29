var title = document.getElementById("title");
var p_tags = document.getElementsByTagName("p");
var mainText = document.getElementsByClassName("mainText");
console.log(p_tags);

title.innerHTML = "Hello!!";
title.classList.add("blue_background");

// for (var i of p_tags){
//     i.classList.add("green_background");
// }

for (var i of mainText){
    i.classList.add("blue_background");
    // i.innerHTML = "Ollo Motto";
}

// p_tags.classList.add("red_background");