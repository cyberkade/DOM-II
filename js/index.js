// Selectors
const header = document.querySelector('h1');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a');
const headerImg = document.querySelector('img');
const allImgs = document.querySelectorAll('img');
const destinations = document.querySelectorAll('.destination');
const btn = document.querySelectorAll('.btn');
const h4 = document.querySelectorAll('h4');
const p = document.querySelectorAll('.destination p');
const copyright = document.querySelector('footer');
//

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

const hide = (e)=>{
    e.target.style.display = 'none';
}
//Event 2
headerImg.addEventListener('dblclick', hide);
//

const zoom = (e)=>{
    if (e.deltaY < 0) {
      // Zoom in
      console.log(e.deltaY);
      scale = .8;
    }
    else {
      // Zoom out
      console.log(e.deltaY);
      scale = 1.1;
    }
    // Apply scale transform
    e.target.style.transform = `scale(${scale})`;
  }
  let scale = 1;
 //Event 3
  allImgs[1].addEventListener('wheel', zoom);
  allImgs[2].addEventListener('wheel', zoom);
//

//Event 4
destinations[0].addEventListener('mouseover', (e)=>{
    if(destinations[0].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[0].style.backgroundColor = randomColor();
        destinations[0].style.padding = '10px';
        destinations[0].style.borderRadius = '20px';
        destinations[0].style.boxSizing = '20px';
    }
})
destinations[1].addEventListener('mouseover', (e)=>{
    if(destinations[1].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[1].style.backgroundColor = randomColor();
        destinations[1].style.padding = '10px';
        destinations[1].style.borderRadius = '20px';
        destinations[1].style.boxSizing = '20px';
    }
  })
destinations[2].addEventListener('mouseover', (e)=>{
    if(destinations[2].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[2].style.backgroundColor = randomColor();
        destinations[2].style.padding = '10px';
        destinations[2].style.borderRadius = '20px';
        destinations[2].style.boxSizing = '20px';
    }
})
//

//Event 5
destinations[0].addEventListener('mouseout', (e)=>{
    if(destinations[0].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[0].style.backgroundColor = 'white';
        destinations[0].style.color = 'black';
    }
})
destinations[1].addEventListener('mouseout', (e)=>{
    if(destinations[1].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[1].style.backgroundColor = 'white';
        destinations[1].style.color = 'black';
    }
})
destinations[2].addEventListener('mouseout', (e)=>{
    if(destinations[2].style.backgroundColor ==='rgb(35, 35, 35)'){
        return
    }else{
        destinations[2].style.backgroundColor = 'white';
        destinations[2].style.color = 'black';
    }
})
//

//Event 6 - Event Propogation
destinations[0].addEventListener('click',()=>{
    destinations[0].style.backgroundColor = 'rgb(35,35,35)';
    destinations[0].style.color = 'white';
})
destinations[1].addEventListener('click',()=>{
    destinations[1].style.backgroundColor = 'rgb(35,35,35)';
    destinations[1].style.color = 'white';
})
destinations[2].addEventListener('click',()=>{
    destinations[2].style.backgroundColor = 'rgb(35,35,35)';
    destinations[2].style.color = 'white';
})
btn[0].addEventListener('click', (e)=>{
    e.stopPropagation();
    p[0].textContent = "Awesome! You're all signed up for your special getaway! Please check your email for confrimation."
    e.target.textContent = "You're Signed up!"
    e.target.style.backgroundColor = 'lightgreen';
    e.target.style.color = 'white';
})
btn[1].addEventListener('click', (e)=>{
    e.stopPropagation();
    p[1].textContent = "Awesome! You're all signed up for your special getaway! Please check your email for confrimation."
    e.target.textContent = "You're Signed up!"
    e.target.style.backgroundColor = 'lightgreen';
    e.target.style.color = 'white';
})
btn[2].addEventListener('click', (e)=>{
    e.stopPropagation();
    p[2].textContent = "Awesome! You're all signed up for your special getaway! Please check your email for confrimation."
    e.target.textContent = "You're Signed up!"
    e.target.style.backgroundColor = 'lightgreen';
    e.target.style.color = 'white';
})
//

//Event 7
copyright.addEventListener('focus',(e)=>{
    copyright.style.backgroundImage = "url('https://picsum.photos/1000/300')"
})