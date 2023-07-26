console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role = "tabpanel"]')

function handleClick(event){
console.log(event.currentTarget)
// hide all tab panels
tabPanels.forEach(function(panel){
    panel.hidden = true;
})
// mark all tabs as unselected
tabButtons.forEach(function(tab){
    tab.setAttribute('aria-selected',false)
})
//mark the clicked tab as selected

event.currentTarget.setAttribute('aria-selected',true)

//find the associated tabPanel and show it
if(event.currentTarget.id === "js"){
   let tabPanel = tabs.querySelector('[aria-labelledby = "js"');
   tabPanel.hidden = false;
}
if(event.currentTarget.id === "ruby"){
    let tabPanel = tabs.querySelector('[aria-labelledby = "ruby"');
    tabPanel.hidden = false;
 }
 if(event.currentTarget.id === "php"){
    let tabPanel = tabs.querySelector('[aria-labelledby = "php"');
    tabPanel.hidden = false;
 }
}

tabButtons.forEach(button => button.addEventListener('click', handleClick));