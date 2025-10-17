//approch 

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", (dets) => {
//     if(dets.key === " "){
//         h1.textContent = "Space key Pressed";
//     }else {
//         h1.textContent = dets.key;
//     }
// })

//approch 2

let btn = document.querySelector("#btn");
let file = document.querySelector('#fileinp');

btn.addEventListener('click', function() {
    file.click();
})

file.addEventListener('change', function(dets) {
    let filenme = dets?.target.files[0];
    if(filenme){
        btn.textContent = filenme.name;
    }
})