const body = document.body;
const toggle = document.querySelector(".toggle");
const button = document.querySelector(".toggle-button");

    toggle.addEventListener("click", ()=>{
        body.classList.toggle("dark");
    })
