let p = document.createElement("p");
p.textContent="que onda";
p.innerHTML= "<strong>que onda en negrito</strong>";
document.body.appendChild(p);

let h1 = document.createElement("h1");
h1.textContent= "hola devuelta";
h1.innerHTML= "<strong>hola devuelta pero en negrita</strong>"
document.body.appendChild(h1)