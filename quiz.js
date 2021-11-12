let totalButton = document.getElementById("total");
let buah = document.getElementById("list");
let outputBox = document.getElementById("result");

function total() {
	if(buah.value == 'Apel'){
		harga = 23000;
	}
	else if(buah.value == 'Pisang'){
		harga = 12000;
	}
	else if(buah.value == 'Anggur'){
		harga = 35000;
	}
	else{
		harga = 17000;
	}

	kg = parseInt(document.getElementById('kg').value);
	disc = parseInt(document.getElementById('diskon').value);
	document.getElementById('jenis').innerHTML = buah.value;
	document.getElementById('price').innerHTML = harga;
	document.getElementById('jumlah').innerHTML = kg;
	document.getElementById('potongan').innerHTML = disc;
	document.getElementById('result').innerHTML = harga * kg * disc / 100;
	document.getElementById('bayar').innerHTML = harga * kg;
	document.getElementById('jumlahBayar').innerHTML = (harga * kg) - (harga * kg * disc / 100);
}