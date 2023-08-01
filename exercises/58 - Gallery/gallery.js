function Gallery(gallery){
    if(!gallery){
        throw new Error('no gallery found');
    }
console.log(gallery)

//select elements we need
const images = Array.from(gallery.querySelectorAll('img'));
const modal = document.querySelector('.modal')
const prevButton = modal.querySelector('.prev')
const nextButton = modal.querySelector('.next')
let currentImage ;

function openModal(){
    console.info('opening modal')
    // first check if the modal is already open 
    if(modal.matches('.open')){
        console.info('modal already open')
        return;
    }
    modal.classList.add('open')

    window.addEventListener('keyup', handleKeyUP)
    nextButton.addEventListener('click', showNextImage)
    prevButton.addEventListener('click', showPrevImage)

}

function closeModal(){
    modal.classList.remove('open')
    window.removeEventListener('keyup', handleKeyUP)
    prevButton.rddEventListener('click', showPrevImage)
    nextButton.removeEventListener('click', showNextImage)

}

function handleClickOutside(e){
    if(e.target === e.currentTarget){
        closeModal();
    }
}

function handleKeyUP(event){
    if(event.key === 'Escape')closeModal();
    if(event.key === "ArrowLeft")showPrevImage();
    if(event.key === "ArrowRight")showNextImage();
}
function showNextImage(){
showImage(currentImage.nextElementSibling || gallery.firstElementChild)
}

function showPrevImage(){
    showImage(currentImage.previousElementSibling || gallery.lastElementChild)
}

function showImage(el){
    if(!el){
        console.info('no image to show');
        return;
    }
    console.log(el)
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title
    modal.querySelector('figure p').textContent = el.dataset.description
    currentImage = el;
    openModal();
}


images.forEach(image => image.addEventListener('click',e => {
    showImage(e.currentTarget)
} ))

    modal.addEventListener('click',handleClickOutside)
    
}

const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))
