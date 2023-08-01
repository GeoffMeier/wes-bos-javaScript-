const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = []

function handleSubmit(e){
e.preventDefault();
const name = e.currentTarget.item.value;
console.log(name);
// if its empty then don't submit it
if(!name) return;
const item = {
    name,
    id: Date.now(),
    complete: false
}
// push items into our state
items.push(item)
console.log(`there are now ${items.length} in your state`)
//clear the form 
e.target.reset();
// fire off a custom event that will tell anyone who cares that the items have been updated

list.dispatchEvent(new CustomEvent('itemsUpdated'))

}

function displayItems(){
const html = items.map(item => 
     `<li class="shopping-item">
     <input 
     value=${item.id} 
     type ="checkbox"
     ${item.complete ? 'checked' : ''}>
     <span class="itemName">
     ${item.name}
     </span>
     <button 
     value="${item.id}" 
     aria-label="Remove ${item.name}">
     &times;
     </button>
     
     </li>`
).join('');
list.innerHTML = html

}
function mirrorToLocalStorage(){
console.log('saving to local storage');
localStorage.setItem('items', JSON.stringify(items))

}

function restoreFromLocalStorage(){
    console.info('Restoring from LS');
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length){
        items = lsItems;
        list.dispatchEvent(new CustomEvent('itemsUpdated'))
    }
}



function deleteItemButton(id){
 items = items.filter(item => item.id !== id)
 list.dispatchEvent(new CustomEvent('itemsUpdated'))

}

function markAsComplete(id){
console.log('Marking as complete', id)
const itemRef = items.find(item => item.id === id)
console.log(itemRef);
itemRef.complete = !itemRef.complete

list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit',handleSubmit);
list.addEventListener('itemsUpdated', displayItems)
list.addEventListener('itemsUpdated',mirrorToLocalStorage)
list.addEventListener('click',function(e){
    const id = parseInt(e.target.value);
    if(e.target.matches('button')){
        deleteItemButton(id)
    }
    if(e.target.matches('input[type="checkbox"]')){
        markAsComplete(id);
    
}
})

    


restoreFromLocalStorage();




