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

//Delete Item

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
