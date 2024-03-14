function convert() { 
    var beratBadan = document.getElementById("weight").value;
    var usia = document.getElementById("age").value;
    var tinggiBadan = document.getElementById("height").value;

//keterangan jika kosong
if (beratBadan.trim() === "") {
    alert("Silakan isi terlebih dahulu!");
    return false;
  } else if (usia.trim() === "") {
    alert("Silakan isi terlebih dahulu!");
    return false; 
  } else if (tinggiBadan.trim() === "") {
    alert("Silakan isi terlebih dahulu!");
    return false; 
  }

  return true;
}

//function untuk menghitung dari form
function count() {
    if (!convert()) {
      return;
    }
  
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / ((height * height) / 10000);
    let countResult = bmi.toFixed(2);
    var exp;
    document.getElementById("countResult").innerHTML = countResult;
  
    if (countResult < 18.15) {
      exp = "Kekurangan Berat Badan";
    } else if (countResult >= 18.15 && countResult <= 24.9) {
      exp = "Normal (ideal)";
    } else if (countResult >= 25.0 && countResult <= 29.9) {
      exp = "Kelebihan Berat Badan";
    } else {
      exp = "Obesitas (kegemukan)";
    }
  
    document.getElementById("explanation").innerHTML = exp;
  }

//function reset pada button reset untuk menhapus isi data
function reset() {
    document.getElementById("weight").value = " ";
    document.getElementById("age").value = " ";
    document.getElementById("height").value = " ";
    document.getElementById("countResult").innerHTML = "0";
    document.getElementById("explanation").innerHTML = "-";
}
