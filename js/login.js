// --- Aporte de MAIN: identificacion por codigo universitario ---
const estudiantesRegistrados = ["221045", "221078", "221099"];

function identificarEstudiante(){
  const codigo = document.getElementById('loginCodigo').value.trim();
  const box = document.getElementById('loginResult');
  box.innerHTML = estudiantesRegistrados.includes(codigo)
    ? `<div class="result ok">Estudiante identificado correctamente.</div>`
    : `<div class="result err">Codigo no reconocido.</div>`;
}

// --- Aporte de TEST: login con usuario, contrasena y rol ---
const usuarios = {
  "admin@unamba.edu.pe":  { pass: "admin123", rol: "administrador" },
  "221045@unamba.edu.pe": { pass: "clave123", rol: "colaborador" }
};

function iniciarSesion(){
  const usuario = document.getElementById('loginUsuario').value.trim();
  const pass = document.getElementById('loginPass').value;
  const u = usuarios[usuario];
  const box = document.getElementById('loginResult');
  box.innerHTML = (u && u.pass === pass)
    ? `<div class="result ok">Sesion iniciada como ${u.rol}.</div>`
    : `<div class="result err">Usuario o contrasena incorrectos.</div>`;
}
