let dale = document.querySelector("button").addEventListener("click",()=>{
    alert("hiciste click");
})

let subir =document.querySelector("form").addEventListener("submit", (event)=>{
   event.preventDefault();
   alert("se envio el formulario");
})