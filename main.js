var form = document.getElementById('form');
var items = document.getElementById('list-group');
var filter = document.getElementById('search');
//Events
form.addEventListener('submit', addItem);
items.addEventListener('click', removeItem);
filter.addEventListener('keydown', filterItems);
//Add items
function addItem(event) {
    event.preventDefault();
    
    var item = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className= 'list-group-items';
    li.appendChild(document.createTextNode(item));
    items.appendChild(li);

    //Delete button
    var deleteButton = document.createElement('button');
    
    deleteButton.id= 'button';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
}

//Remove items
function removeItem (event){
    if(event.target.className = 'delete'){
        if(confirm('Are you sure?')){
            var li = event.target.parentElement;
            items.removeChild(li);
        }
    }
}

//Filter items
function filterItems (event){
    var text = event.target.value.toLowerCase();
    var list = document.getElementsByTagName('li');
    Array.from(list).forEach(function(it){
        var itemName = it.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            it.style.display='block';
        }
        else{
            it.style.display='none'; 
        }
    }) 

}
