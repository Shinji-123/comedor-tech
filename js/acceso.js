const tickets = {
  "TICKET-221045-2026": { nombre:"Julio Cesar Llocolli", turno:"Turno 1 (11:30 AM)", estado:"VALIDO" }
};

function validarEntrada(){
  const id = document.getElementById('codigoTicket').value.trim();
  const t = tickets[id];
  const box = document.getElementById('accesoResult');
  if(!t){
    box.innerHTML = `<div class="result err">Ticket no encontrado.</div>`;
    return;
  }
  if(t.estado === 'VALIDO'){
    box.innerHTML = `<div class="result ok">Válido: ${t.nombre} · ${t.turno}. Entregue la bandeja de alimentos.</div>`;
    t.estado = 'SERVIDO';
  } else {
    box.innerHTML = `<div class="result err">Este ticket ya fue servido.</div>`;
  }
}