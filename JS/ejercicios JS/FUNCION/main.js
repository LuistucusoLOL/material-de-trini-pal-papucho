function cuadr(x, n) {
    return x**n;
  }
  function handleSubmit(event){
    event.preventDefault();
    let x = +event.target.x.value;
    let n = +event.target.n.value;
    let p= document.createElement('p');
    p.textContent = `${x} elevado a la ${n} es ${cuadr(x, n)}`;
    document.body.append(p);
  }

  /*  ( ** ) signigica elevado a algo  */