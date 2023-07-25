
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');

const MOVE_AMOUNT = 10;


// setup our canvas for drawing
// const width = canvas.width;
// const height = canvas.height;


// make a variable called height and width from same properties on canvas
const {width,height} = canvas;

// create random starting points each ime using width and height of the canvas

let x = Math.floor( Math.random() * width);
let y = Math.floor( Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;

ctx.beginPath(); //starts the drawing
ctx.moveTo(x,y); 
ctx.lineTo(x,y);
ctx.stroke();

//write a draw function
function draw({key}){
    //increment the hue 
    hue +=20;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    console.log(key)
// start the path
    ctx.beginPath();
    ctx.moveTo(x,y);
//move our x and y values depending on what the user did

    switch(key){
        case 'ArrowUp': 
            y -= MOVE_AMOUNT;
            break;

        case 'ArrowRight': 
            x += MOVE_AMOUNT;
            break;

        case 'ArrowDown': 
            y += MOVE_AMOUNT;
            break;

        case 'ArrowLeft': 
            x -= MOVE_AMOUNT;
            break;

        default: break;
}

    ctx.lineTo(x,y);
    ctx.stroke();
}


// write a handler for the keys

function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key : e.key });
        
    }
   
}

//clear canvas function 

function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0,0,width,height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake')
    }, 
    {once: true}
    )
}

window.addEventListener('keydown', handleKey)
shake.addEventListener('click',clearCanvas)