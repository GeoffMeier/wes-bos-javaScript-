// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper')
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`
// add three list items with the words "one, two, three" in them

// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500'
// set the width to 250
img.width= 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt ='cute puppy!'
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class="myDiv">
        <p>This is paragraph number 1</p>
        <p>This is paragraph number 2</p>

</div>

`

// put this div before the unordered list from above
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin',myHTML)
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
 function myPlayerCard(name,age,height){
    const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>their height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}.</p>
    <button class="delete type="button"">delete</button>
    </div>
    `
    return html;
 }
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = myPlayerCard('Geoffrey',12,200);
cardsHTML+=  myPlayerCard('renee',12, 150);
cardsHTML+=  myPlayerCard('mikaela',12, 150);
cards.innerHTML =cardsHTML;
div.insertAdjacentElement('beforebegin',cards);
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed


// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.delete');
function deleteCard(event){
const buttonThatGotClicked = event.currentTarget;
buttonThatGotClicked.parentElement.remove();
    console.log("card deleted");
}
buttons.forEach(button => button.addEventListener('click', deleteCard))