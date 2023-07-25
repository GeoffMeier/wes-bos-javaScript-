

    const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

const button = document.querySelector('.accept');

function obCallback(payload){
if(payload[0].intersectionRatio === 1){
    button.disabled = false;
};
}

// when something comes into view
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 0.1

});


ob.observe(terms.lastElementChild);
 



