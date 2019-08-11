
function convertir() {
	valor = document.getElementById("temp").value;
	console.log("Valor: " + valor);

	escOrig = document.getElementById("origen");
	itemOrig = escOrig.options[escOrig.selectedIndex].value;

	console.log("Origen : " + itemOrig);

	escDest = document.getElementById("destino");
	itemDest = escDest.options[escDest.selectedIndex].value;
	console.log("Destino : " + itemDest);

	resultado = document.getElementById("resultado");


	if ( itemOrig == "F" ) {
		valor = (valor - 32) * 5 / 9;
	}
	if ( itemOrig == "K" ) {
		valor = valor - 273.15;
	}

	if ( itemDest == "F" ) {
		valor = valor * 9 / 5 + 32;
	}
	if ( itemDest == "K" ) {
		valor = parseFloat(valor) + 273.15;
	}

	resultado.innerHTML = valor;

}
