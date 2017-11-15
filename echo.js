(function() {
 let sayButton = document.getElementById("but");
 let sayInput = document.querySelectorAll("input[type=text]");
 let say = document.getElementById('say');
 sayButton.addEventListener("click", show);
 window.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
     show();
    } else if (e.keyCode !== 13){
     say.innerHTML = 'Naćiśnij Enter';
    }
}, false);

 function show() {
  let isSaid = sayInput[0].value
  say.innerHTML = "Napisałeś: " + isSaid;
 };

})();
