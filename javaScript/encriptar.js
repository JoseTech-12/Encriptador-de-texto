let texto;
let texarea;
let textoEncriptado = "";
let desencriptarText = "";
let resultado = document.getElementById("resultado");
let valor = "";

// funcion de encriptar texto que se activa una vez se haya presionado el botn "encriptar"
function encriptar() {
  texarea = obtenerTexto();
  validarTexto(encriptarTexto());
}

//funcion que validad si el texto comple con los requistos
function validarTexto(valor) {
  texarea = obtenerTexto();
  if (texarea != "") {
    let patron = /^[a-z0-9ñ ]+$/;
    let regex = new RegExp(patron);
    let validar = regex.test(texarea);
    if (validar == true) {
      document.getElementById("contenido").style.display = "none";
      document.getElementById("resultado__resultados").style.display = "flex";
      resultado.innerHTML = valor;
      document.getElementById("texto").value = "";
    } else {
      swal(
        "Algo salio mal",
        "Solo se permiten letras minusculas sin acento",
        "error"
      );
    }
  } else {
    swal("Ingresa un texto");
  }
}

//funcion que obtiene el texto del texarea
function obtenerTexto() {
  texto = document.getElementById("texto").value;
  return texto;
}
// funcion que realiza toda la logica de encriptar, recorriendo todo todo el texto obtenido y haciendo los cambios en el
function encriptarTexto() {
  texarea = obtenerTexto();
  textoEncriptado = "";
  for (let i = 0; i < texarea.length; i++) {
    if (texarea[i] == "a") {
      textoEncriptado += "ai";
    } else if (texarea[i] == "e") {
      textoEncriptado += "enter";
    } else if (texarea[i] == "i") {
      textoEncriptado += "imes";
    } else if (texarea[i] == "o") {
      textoEncriptado += "ober";
    } else if (texarea[i] == "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += texarea[i];
    }
  }

  return textoEncriptado;
}

//funcion que se encarga de desencriptar el texto
function desencriptarTexto() {
  texarea = obtenerTexto();
  desencriptarText = "";

  desencriptarText = texarea.replace(/ufat/g, "u");
  desencriptarText = desencriptarText.replace(/ober/g, "o");
  desencriptarText = desencriptarText.replace(/imes/g, "i");
  desencriptarText = desencriptarText.replace(/enter/g, "e");
  desencriptarText = desencriptarText.replace(/ai/g, "a");

  validarTexto(desencriptarText);
}
//funcion que se encarga de darle funcionalidad al botn¿on copiar
function copiarTexto() {
  resultado = document.getElementById("resultado");
  navigator.clipboard.writeText(resultado.textContent);
}
