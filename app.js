//approch 

let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {
    if(dets.key === " "){
        h1.textContent = "Space key Pressed";
    }else {
        h1.textContent = dets.key;
    }
})