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



/******INCREASE DECREASE BUTTON***************************** */

function increaseValue(keyID) {
  var value = parseInt(document.getElementById(keyID).value, 10);
  value = isNaN(value) ? 0 : value;
  value > 9 ? value = 10 : value++;
  document.getElementById(keyID).value = value;
}

function decreaseValue(keyID) {
  var value = parseInt(document.getElementById(keyID).value, 10);
  value = isNaN(value) ? 1 : value;
  value < 2 ? value = 1 : value--;
  document.getElementById(keyID).value = value;
}

function inputChange(keyID){
  var number = parseInt(document.getElementById(keyID).value, 10);
  if(number > 10){
    document.getElementById(keyID).value = 10;
  }
  else if(number < 1){
    document.getElementById(keyID).value = 1;
  }
}

function itemnum(keyID) { return document.getElementById(keyID).value;}

/******END INCREASE DECREASE BUTTON***************************** */

/******MODAL FORM RESET**************************************/
$('#Modal-food-1').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})
$('#Modal-food-2').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})
$('#Modal-food-3').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})
$('#Modal-food-4').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})
$('#Modal-drink-1').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})
$('#Modal-dessert-1').on('hidden.bs.modal', function () {
  $(this).find('form').trigger('reset');
})

/******END MODAL FORM RESET**************************************/

/****** START ADD CART **** */
const orderidarray = [];
const orderitemarray = [];
const orderitemprice = [];
const orderarray = [];
const orderitempriceList = [];
//const soluongitems = [];
function orderbasket(itemname, itemprice, itemimage, soluong){
  

  const found = orderitemarray.find(element => element == itemname);
  if(found)
  {
    //let a = document.getElementsByClassName(itemname+1)[0];

    return;
  }


  orderidarray.push(i);
  orderitemarray.push(itemname);
  orderitempriceList.push(itemprice*soluong);
  //soluongitems.
  orderarray.push(itemname, itemprice*soluong, itemimage); 


  const orderlist = document.getElementById('orderlist');
  const orderitem = document.createElement('li');
  orderitem.className = `d-flex justify-content-between align-items-center ${itemname}1`

  const orderitempricespan = document.createElement('span');
  const orderitemname = document.createTextNode(itemname);
  const orderitemprice = document.createTextNode(' $ '+itemprice*soluong);
  const soluongitem = document.createTextNode(' sl: '+soluong);

  orderitempricespan.className = 'text-danger';
  orderitempricespan.appendChild(orderitemprice);
  orderitempricespan.appendChild(soluongitem);

  orderitem.appendChild(orderitemname);
  orderitem.appendChild(orderitempricespan);
  orderlist.appendChild(orderitem);

  // Delete button
  const deletebutton = document.createElement('button');
  const deletebuttontext = document.createTextNode('X');
  deletebutton.setAttribute('onclick', `deleteItem(${i},'${itemname}1')`)
  deletebutton.appendChild(deletebuttontext);
  deletebutton.className = 'btn btn-danger round-pill';
  // Delete button

  const orderitemimgtag = document.createElement('img');

  orderitemimgtag.src = itemimage;
  orderitemimgtag.className= `w-25 ${itemname}1`;
  orderlist.appendChild(orderitemimgtag);
  orderitem.appendChild(deletebutton);

  // var sumitem = orderitemprice.reduce(function(a, b){
  //   return a + b;
  // }, 0);

  document.getElementById('totalitems').innerHTML  = "Total item:     "+orderitemarray.length;


  var sum = orderitempriceList.reduce(function(a, b){
    return a + b;
  }, 0);

  document.getElementById('totalcost').innerHTML  = "Total cost:     $"+sum;
  console.log(orderidarray);
}
function deleteItem(id, dl){
  const indexnum = orderidarray.indexOf(id);
  orderidarray.splice(indexnum, 1);
  orderitemarray.splice(indexnum, 1);
  orderitempriceList.splice(indexnum, 1);
  //orderitemimgtag.splice(indexnum, 1);
  console.log(orderidarray);

  // var sumitem = orderitemprice.reduce(function(a, b){
  //   return a + b;
  // }, 0);

  document.getElementById('totalitems').innerHTML  = "Total item:     "+orderitemarray.length;
  var sum = orderitempriceList.reduce(function(a, b){
    return a + b;
  }, 0);
  document.getElementById('totalcost').innerHTML  = "Total cost:     $"+sum;
  //console.log(buttton);
 //orderlist.removeChild(button);
  console.log( document.getElementsByClassName(dl));
  const rm = document.getElementsByClassName(dl);
  console.log(rm[1].remove());
  rm[0].remove();
  //rm[1].remove();
}



/****** END ADD CART **** */