# Quiz
<!DOCTYPE html>
<html>
<head>
	<title>Quiz</title>
	<link rel="stylesheet" type="text/css" href="quiz.css">
</head>
<body>
	<h3>DAFTAR HARGA BUAH</h3>
	<ul>
		<li>Apel - Rp23.000 <span>/ kg </span></li>
		<li>Pisang - Rp12.000 <span>/ kg</span></li>
		<li>Anggur - Rp35.000 <span>/ kg</span></li>
		<li>Mangga - Rp17.000 <span>/ kg</span></li>
	</ul>
	<hr>
	Buah : 
	<select id="list">
		<option value="Apel">Apel</option>
		<option value="Pisang">Pisang</option>
		<option value="Anggur">Anggur</option>
		<option value="Mangga">Mangga</option>
	</select>
	<form>
		Jumlah Buah (dalam Kg) : <input type="number" id="kg" class="kg"><br>
		Jumlah Diskon (dalam %) : <input type="number" id="diskon" class="diskon"><br>
	</form>
	<button onclick="total()">
 		Total
	</button>
	<hr>
	<h1>Bon</h1>
	<p>Jenis Buah : <span id="jenis">--</span></p>
	<p>Harga buah/kg : Rp<span id="price">--</span></p>
	<p>Jumlah kg : <span id="jumlah">--</span>kg</p>
	<p>Potongan diskon : <span id="potongan">--</span>%</p>
	<p>Besar diskon: Rp<span id="result">--</span></p>
	<p>Sub total : Rp<span id="bayar">--</span></p>
	<p>Total : Rp<span id="jumlahBayar">--</span></p>
	<script src="quiz.js"></script>
</body>
</html>
