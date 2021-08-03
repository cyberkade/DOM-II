// Selectors
const header = document.querySelector('header')
const h1 = document.querySelector('h1');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('.nav-link')
const headerImg = document.querySelector('img');
const allImgs = document.querySelectorAll('img');
const destinations = document.querySelectorAll('.destination');
const btn = document.querySelectorAll('.btn');
const h4 = document.querySelectorAll('h4');
const p = document.querySelectorAll('.destination p');
const footer = document.querySelector('footer');
const copyright = document.querySelector('footer p');
//

// let links = document.querySelectorAll('.nav-link')
links.forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
    })
})
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
footer.addEventListener('click',(e)=>{
    footer.style.backgroundImage = "url('https://picsum.photos/1000/300/?blur=2')"
})

//Event 7
links[2].addEventListener('focus',(e)=>{
    links[2].style.fontWeight = 'bold';
    h1.style.fontWeight = 'bold';
    header.style.backgroundImage = "url('data:image/jpeg;base64,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')"
})
//

//Event 8
links[2].addEventListener('blur',(e)=>{
    links[2].style.fontWeight = '';
    h1.style.fontWeight = '';
    header.style.backgroundImage = ""
})
//

//Event 9
window.addEventListener('load',(e)=>{
    footer.style.backgroundColor = 'rgb(35, 35, 35)';
    copyright.style.color = 'white';
})
//

//Event 10
window.addEventListener('resize',(e)=>{
    h1.textContent = 'Fun Bus +'
})
//
allImgs[3].addEventListener('scroll',()=>{
    allImgs[3].style.backgroundImage = "url('https://picsum.photos/600/200/')"
})
console.log(allImgs[3])
console.log(footer)

