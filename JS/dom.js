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

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.style.borderBottom = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #ff0';
