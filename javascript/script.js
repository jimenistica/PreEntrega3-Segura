//Que no se abra utomáticamente
document.getElementById("mediosPagos").style.display = "none";

// Abrir el modal al hacer clic en el botón
document.getElementById("abrirMediosPago").onclick = function () {
  document.getElementById("mediosPagos").style.display = "block";
};

// Cerrar el modal al hacer clic en la "x"
document.getElementsByClassName("close")[0].onclick = function () {
  document.getElementById("mediosPagos").style.display = "none";
};

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
  if (event.target == document.getElementById("mediosPagos")) {
    document.getElementById("mediosPagos").style.display = "none";
  }
  if (event.target == document.getElementById("carritoEmergente")) {
    document.getElementById("carritoEmergente").style.display = "none";
  }
};

//Que no se abra utomáticamente
document.getElementById("carritoEmergente").style.display = "none";

// Abrir el modal al hacer clic en el botón
document.getElementById("abrirCarritoEmetgente").onclick = function () {
  document.getElementById("carritoEmergente").style.display = "block";
};

// Cerrar el modal al hacer clic en la "x"
document.getElementsByClassName("close")[1].onclick = function () {
  document.getElementById("carritoEmergente").style.display = "none";
};



