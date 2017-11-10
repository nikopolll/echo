(function() {
 let sayButton = document.getElementById("but");
 let sayInput = document.querySelectorAll("input[type=text]");
 let say = document.getElementById('say');
 sayButton.addEventListener("click", show);

 function show() {
  let isSaid = sayInput[0].value
  say.innerHTML = isSaid;
 };

})();
