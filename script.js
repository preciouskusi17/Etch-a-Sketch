let container= document.querySelector('#container');
let btn= document.querySelector('#btn');
let grids= ''

 function makeGrid (newGrid){
    for (let i=0; i<newGrid; i++){
            for (let j=0; j<newGrid; j++){
                let grid= document.createElement('div');
                grid.id='grid'
                container.appendChild(grid)
                grid.setAttribute('style',`width:${510/newGrid}px;height:${510/newGrid}px; border:1px grey solid; box-sizing:border-box;`)
            }
        }
        grids=document.querySelectorAll('#grid');
        grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>{
            grid.style.background=rainbowColor()
            })})
    }
makeGrid(16);

btn.addEventListener('click',()=>{
    container.textContent='';
    let newGrid=+prompt('How many number of squares do you want eadh sides of the grid to be?');
    if (newGrid>100){
        alert('You have exceeded the maximum square per grid sides, which is 100. \nDecrease your value to create the your grid')
    } else makeGrid(newGrid)
    })

let reset= document.querySelector('#reset')
reset.addEventListener('click', ()=>{
    grids.forEach(grid=>{
        grid.style.background='white'})
})

function rainbowColor(){
    let options= '0123456789ABCDEF';
    let color= '#'
    for (let i=0; i<6; i++){
        color += options[Math.floor(Math.random()*16)]
    } return color
}

let btnErase= document.querySelector('#erase')
let btnRainbow= document.querySelector('#rainbow')
let btnBlack= document.querySelector('#black')
let btnBlue= document.querySelector('#blue')

btnErase.addEventListener('click', ()=>{
    grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>grid.style.background='white')})
})

btnRainbow.addEventListener('click', ()=>{
    grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>grid.style.background=rainbowColor())})
})

btnBlack.addEventListener('click', ()=>{
    grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>grid.style.background='black')})
})

btnBlue.addEventListener('click', ()=>{
    grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>grid.style.background='blue')})
})