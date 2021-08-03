const allBlocks = document.querySelectorAll('.block');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

redBlock.addEventListener('mouseup',(e)=>{
    redBlock.style.order -= 1;
    // console.log(e.target);
});
blueBlock.addEventListener('mouseup',(e)=>{
    blueBlock.style.order -= 1;
    // console.log(e.target);
});
greenBlock.addEventListener('mouseup',(e)=>{
    greenBlock.style.order -= 1;
    // console.log(e.target);
});
pinkBlock.addEventListener('mouseup',(e)=>{
    pinkBlock.style.order -= 1;
    // console.log(e.target);
});
grayBlock.addEventListener('mouseup',(e)=>{
    grayBlock.style.order -= 1;
    // console.log(e.target);
});

// let mousedownID = -1;  //Global ID of mouse down interval
// function mousedown(e) {
//   if(mousedownID==-1)  //Prevent multiple loops!
//      mousedownID = setInterval(whilemousedown, 100 /*execute every 100ms*/);


// }
// function mouseup(e) {
//    if(mousedownID!=-1) {  //Only stop if exists
//      clearInterval(mousedownID);
//      mousedownID=-1;
//    }

// }
// function whilemousedown(e) {
    
// }

allBlocks.forEach(item=>{
    let total = 0
    let isFocused = false;
    item.addEventListener('mousedown',(e)=>{
        e.stopPropagation();
        isFocused = true;
        setInterval(() => {
            if(isFocused === true){
                console.log(e.target) 
                total += 1;
                e.target.style.position = 'relative'
                e.target.style.left = `${total}px`
            }else{return}
        }, 100);
    });
    item.addEventListener('mouseup',(e)=>{
        e.stopPropagation();
        isFocused = false;
    })
});