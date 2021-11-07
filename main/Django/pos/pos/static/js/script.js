/******FILTER MENU******** */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    MenuRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) MenuAddClass(x[i], "show");
  }
}

// Show filtered elements
function MenuAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function MenuRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/******END FILTER MENU**** */

/******MODAL ELEMENT**************** */
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
/******END MODAL ELEMENT**************** */

/******INCREASE DECREASE BUTTON***************************** */
var elms = document.querySelectorAll("[id='duplicateID']");
function increaseValue() {
  var value = parseInt(document.getElementById('input-number').value, 10);
  value = isNaN(value) ? 0 : value;
  value > 9 ? value = 10 : value++;
  document.getElementById('input-number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('input-number').value, 10);
  value = isNaN(value) ? 1 : value;
  value < 2 ? value = 1 : value--;
  document.getElementById('input-number').value = value;
}

function inputChange(){
  var number = parseInt(document.getElementById('input-number').value, 10);
  if(number > 10){
    document.getElementById("input-number").value = 10;
  }
  else if(number < 1){
    document.getElementById("input-number").value = 1;
  }
}
/******END INCREASE DECREASE BUTTON***************************** */

/******ADD TO CART**************************************** */

/******END ADD TO CART************************************************/