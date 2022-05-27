
const mainBody = document.querySelector('#content')

export default function pageLoad(){
    let main = document.createElement('main')
    main.classList.add('main-container')
    
    let subContainer = document.createElement('div')
    subContainer.classList.add('sub-container')
    let headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = 'A Premium And Authentic Feeling'
    let button = document.createElement('div')
    button.textContent = 'Book a Table'
    button.classList.add('button')
    subContainer.appendChild(headline)
    subContainer.appendChild(button)

    main.appendChild(subContainer)

    
    let imgPlaceHolder = document.createElement('img')
    imgPlaceHolder.src = 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
    main.appendChild(imgPlaceHolder)

    mainBody.appendChild(main)
}
