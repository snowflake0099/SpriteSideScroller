const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate(){  //this function basically is  self repeating
    //the function updates and redraws the content on the canvas.
    //hence animate it gives the vibe of motion/ animation moving! 
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT); // clears entire canvas
    ctx.fillRect(50,50,100,100); // draws rectablge on canvas
    requestAnimationFrame(animate); //this method tells my browser that 
    //i want to execute a animation tells browser right call a user supplied callback function 
    //before repaint
};
animate();  //calls animate which is function animate
//ctx = variable so . clear rect guess what clears rectab