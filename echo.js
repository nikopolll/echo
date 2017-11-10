(function() {
 let sayButton = document.getElementById("but");
 let sayInput = document.querySelectorAll("input[type=text]");
 let powiedz = document.getElementById('powiedz');
 sayButton.addEventListener("click", pokaz);

 function pokaz() {
  let wpisane = sayInput[0].value
  powiedz.innerHTML = wpisane;
 };

})();
