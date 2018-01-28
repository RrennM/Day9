var calc = document.getElementById("submit");
calc.addEventListener("click", function() {
  
rad = document.getElementById("radius").value;
volume = ((4/3) * Math.PI * ((parseInt(rad)) ** 3));

document.getElementById("volume").value = volume;
});


