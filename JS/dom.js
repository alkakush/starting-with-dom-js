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
/*
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
*/

// ============================== TRAVERSING  THE  DOM =============================

// parentNode  //
// var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement //
// var itemList = document.querySelector('#items');

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#5f5050';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes //
// var itemList = document.querySelector('#items');

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor =  'yellow';
// // firstChild
// console.log(itemList.firstChild); 

// // firstElementChild
// console.log(itemList.firstElementChild); 
// itemList.firstElementChild.textContent = 'Hello';

// // lastChild
// console.log(itemList.lastChild); 

// // lastElementChild
// console.log(itemList.lastElementChild); 
// itemList.lastElementChild.textContent = 'Hello 2'; 

// ====================== Sibling ========================== 

// var itemList = document.querySelector('#items');
// //nextSibling //
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //perviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// ===================== Create Element  and Insert values  =======================

//createElement

// //create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add Attribute
// newDiv.setAttribute('title' ,  'Hello Div');

// // Create text Node
// var newDivText = document.createTextNode('Hello World !');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv , h1);

//================= Events ================================

//==== Click  Event listner ===//

// var button = document.getElementById('button').addEventListener('click', buttonclick);
    
// function buttonclick(e){
// console.log('Button clicked');
//   document.getElementById('header-title').textContent = 'Changed';   /* change header content when button is clicked */
//   document.querySelector('#main').style.backgroundColor = 'coral'; 

//   console.log(e.type);
//   console.log(e);
//   console.log(e.target); /* gives actual element that was clicked */
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
 
//   console.log(e.clientX);
//   console.log(e.clientY);

//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

// === Mouse Event Listener ======= //

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// function runEvent(e){
//  console.log('EVENT TYPE: '+e.type);
 
// //  output.innerHtml = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

// box.style.backgroundColor = "rgb( "+e.offsetX+", "+e.offsetY+", 40)";
// }

// ========== Keyboard Input Event ============ //

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select =document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('input', runEvent);

select.addEventListener('change',runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);

  console.log(e.target.value);
  // document.getElementById('input').innerHTML = '<h3>'+e.target.value+'</h3>';
}