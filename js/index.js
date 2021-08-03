const header = document.querySelector('h1');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a');
const headerImg = document.querySelector('img');
const allImgs = document.querySelectorAll('img');

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

const changeColor = ()=>{
    const color = randomColor();
    document.body.style.backgroundColor = color;
}
//Event 1
document.addEventListener('keydown', changeColor);
//
const resize = (e)=>{
    if(e.target.style.width === '95vw'){
        e.target.addEventListener('dblclick', (e)=>{
            e.target.style.width = 'auto';
            e.target.style.height = 'auto';
            e.target.style.border = 'none'
            e.target.style.margin = '0';
        })
    }else{
        e.target.style.border = '5px solid black'
        e.target.style.width = '95vw';
        e.target.style.height = '70vh';
        e.target.style.margin = '100px auto';
    }
}
//Event 2
headerImg.addEventListener('dblclick', (e)=>{
    e.stopPropagation();
    resize(e);
});
//
const zoom = (e)=>{
    if (e.deltaY < 0) {
      // Zoom in
      scale = .8;
    }
    else {
      // Zoom out
      scale = 1.2;
    }
    // Apply scale transform
    e.target.style.transform = `scale(${scale})`;
  }
  let scale = 1;
 //Event 3
  allImgs[1].addEventListener('wheel', zoom);
  allImgs[2].addEventListener('wheel', zoom);
//