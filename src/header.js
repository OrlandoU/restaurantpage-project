const mainBody = document.querySelector('#content')

export default function header() {
    //Header with nav menu
    let header = document.createElement('header')
    header.classList.add('header-container')
    //Left Side of Header
    let leftSide = document.createElement('div')
    leftSide.classList.add('left-side')
    leftSide.textContent = 'Beefy'
    //Right Side of Header
    let rightSide = document.createElement('div')
    rightSide.classList.add('right-side')
    let rightSideOptions = ['Home', 'Menu', 'About Us']
    rightSideOptions.forEach(item => {
        let currentOpt = document.createElement('div')
        currentOpt.textContent = item;
        currentOpt.classList.add('nav-items')
        if(item == 'About Us'){
            currentOpt.classList.add('aboutUs')
        }
        else {
            currentOpt.classList.add(item)
        }
        
        rightSide.appendChild(currentOpt)
    })


    header.appendChild(leftSide)
    header.appendChild(rightSide)

    mainBody.appendChild(header)
}

