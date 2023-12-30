let container= document.querySelector('#container');
let btn= document.querySelector('#btn');

 function makeGrid (newGrid){
    for (let i=0; i<newGrid; i++){
            for (let j=0; j<newGrid; j++){
                let grid= document.createElement('div');
                grid.id='grid'
                container.appendChild(grid)
                grid.setAttribute('style',`width:${510/newGrid}px;height:${510/newGrid}px; border:1px grey solid; box-sizing:border-box;`)
            }
        } 
    let grids= document.querySelectorAll('#grid');
    grids.forEach(grid=>{
        grid.addEventListener('mouseover', ()=>{
            grid.style.background='black'
            })
        })
}
makeGrid(16)



btn.addEventListener('click',()=>{
    container.textContent='';
    let newGrid=+prompt('How many number of squares do you want eadh sides of the grid to be?');
    if (newGrid>100){
        alert('You have exceeded the maximum square per grid sides, which is 100. \nDecrease your value to create the your grid')
    } else makeGrid(newGrid) 
    })
