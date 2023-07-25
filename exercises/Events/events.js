const butts = document.querySelector(".butts");
const coolButton = document.querySelector('.coolButton');



butts.addEventListener('click', function(){
    console.log('it got clicked');
})
coolButton.addEventListener('click', function(){
    console.log("COOL button was Clicked!!");
})

const buyButtons = document.querySelectorAll('button.buy');

// function buyItem(){
//     console.log("BUYING ITEM");
// }

// buyButtons.forEach(function(buyButton){
//     console.log(buyButton);
//     buyButton.addEventListener('click', buyItem)
// })

function handleBuyButton(event){
    console.log("you are buying");
    console.log(event.target.dataset.price)
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButton);
})


window.addEventListener(
    'click',
    function(event){
        console.log('you clicked the window');
        console.log(event.target);
        event.stopPropagation();
    },
    {capture:true}
)