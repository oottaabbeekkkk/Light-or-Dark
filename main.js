let hammasi = document.querySelector(".all");
let div = document.querySelector(".div");
let button = document.querySelector(".btn");

button.addEventListener('click', () => {
    if(div.classList.contains('new1')){
        div.classList.remove('new1')
        div.classList.add("new2")
        button.classList.add("new3")
        hammasi.classList.add(`new`)
    } else {
        div.classList.add('new1')
        hammasi.classList.remove(`new`)
        div.classList.remove("new2")
        button.classList.remove("new3")
    }
})