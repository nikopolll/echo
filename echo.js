(function() {
 let sayButton = document.getElementById("but");
 let sayInput = document.querySelectorAll("input[type=text]");
 let say = document.getElementById('say');
 let showNow = document.getElementById('imidiet');
 sayButton.addEventListener("click", show);
 window.addEventListener("keydown", print);

// Keypres event detect
 function print(e) {
  if (e.keyCode === 13) {
   show();
  } else if (e.keyCode !== 13) {
   say.innerHTML = 'Press Enter';
  }
 };
// Display text from input
 function show() {
  let isSaid = sayInput[0].value
  say.innerHTML = "You said: " + isSaid;
 };
// Data-binding, imidiet display text from input
 sayInput[0].addEventListener('input', function(evt) {
  showNow.innerHTML = this.value;
 });

})();
