function showView(name){
  document.getElementById('view-login').hidden   = name !== 'login';
  document.getElementById('view-reserva').hidden = name !== 'reserva';
  document.getElementById('view-acceso').hidden  = name !== 'acceso';
}