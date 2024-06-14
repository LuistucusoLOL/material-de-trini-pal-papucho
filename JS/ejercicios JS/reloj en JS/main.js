function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('reloj1').textContent = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj2').textContent = `${horas}:${minutos}:${segundos}`;
  }
  
  actualizarReloj();
  setInterval(actualizarReloj, 1000);