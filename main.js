document.getElementById("formularioEncuesta").addEventListener("submit", enviarencuesta);

function enviarencuesta(e) {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let provincia = document.getElementById("provincia").value.toUpperCase();

  const encuestato = {
    nombre,
    edad,
    provincia,
  };

  if (nombre !="" && edad >= 18) {
    provincia = prompt("Ingrese su Provincia").toUpperCase();
    entrada = prompt(
      " Ingrese su provincia: \n1. para Buenos Aires \n2. para Mendoza \n3. 3 para salir"
    );
  } else {
    alert("tienes que ser mayor de 18 años");
  }

  console.log(encuestato);

  e.preventDefault();
}
