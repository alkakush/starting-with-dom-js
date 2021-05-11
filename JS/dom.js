//  =============== EXAMINE  THE DOCUMENT OBJECT ==========
/*
// console.dir(document);
console.log(document.domain);
console.log(document.url);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
*/

//  console.log(document.all);
//  console.log(document.all[10]);

//=================== EXAMINE THE DOCUMENT OBJECT BYE SELECTOR ==================

// document.all[10].textContent = 'Hello';
/*
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
*/


//==== GETELEMENTBYID ======//

// console.log(document.getElementById('header-title'));
// same as above 
//   var headerTitle = document.getElementById('header-title');

//  console.log(headerTitle);

  // ====== change header content
//  headerTitle.textContent = 'hello';
//  headerTitle.innerHTML = 'Goodbye';
//  console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3> Hello </h3>';


//======= apply style =====
/*
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.style.borderBottom = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #ff0';
*/

// ==========  GETELEMENTSBYCLASSNAME ===========================
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold' ;
items[1].style.backgroundColor = 'yellow' ;

//== Gives error
// items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}
*/

// ======================= GETELEMENTSBYTAGNAME =======================
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold' ;
li[1].style.backgroundColor = 'yellow' ;

//== Gives error
// items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'darkgray';
}
*/

// ==================== QUERYSELECTOR =================================
/*
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #f00';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value =" SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
*/


// ==================== QUERYSELECTORALL =================================
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'gray';
    even[i].style.backgroundColor = 'black';
    odd[i].style.color = 'white';
    even[i].style.color = 'white';
}
