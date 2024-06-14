function fact(n){
    let result= 1;
    for (let i = 1; i < n; i++){
        result*=i
    }
    return result
}
function handleSubmit(event){
    event.preventDefault();
    let n = +event.target.n.value;
    let p= document.createElement('p');
    p.textContent = `${n} factorizado es ${fact(n)}`;
    document.body.append(p);
  }
// este codigo aun no lo termine pero es el ejercicio numero 3 de la guia de ejercicios , aviso por si se ve medio mal