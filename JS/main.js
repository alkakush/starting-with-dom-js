
// =========================== Use form submit Event and item Delete event ================== //

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// == Form submit Event == //
form.addEventListener('submit', addItem);

//=== Delete event ===//
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e){
    e.preventDefault();

    // console.log(1);

    // get input value
    var newItem = document.getElementById('item').value;

   // Create new li element
   var li = document.createElement('li');
   // Add class 
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
     
    // Create Delete button element
    var deleteBtn = document.createElement('button');

    // Add class to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append  button to the li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// === Remove item ===//

function removeItem(e){
    if(e.target.classList.contains('delete')){
     console.log(1); 
     if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li); 
     }  
    }

    // console.log(1);
}

// =================  Apply filter Event =========== //

var filter = document.getElementById('filter');


// filter event
filter.addEventListener('keyup', filterItems);

// create function for filter item 
function filterItems(e){
    // converts text to lowercase
    var text = e.target.value.toLowerCase();

    // Get li
    var items = itemList.getElementsByTagName('li');
    // console.log(items);

    // Convert to an array   
    Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       // equal to search item
       if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
       } else{
           item.style.display = 'none';
       }
       //   console.log(itemName);
    });
    // console.log(text);
}