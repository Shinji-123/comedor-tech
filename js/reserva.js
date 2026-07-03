let contador = 1;

function generarTicket(){
  const codigo = document.getElementById('codigoRes').value;
  const turno = document.getElementById('turnoRes').value;
  const id = `TICKET-${codigo}-2026-${String(contador++).padStart(2,'0')}`;
  document.getElementById('reservaResult').innerHTML =
    `<div class="result ok">Ticket generado: <b>${id}</b><br>${turno}</div>`;
}
