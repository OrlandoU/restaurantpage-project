const mainBody = document.querySelector('#content');

export default function aboutUs(){
    let main = document.createElement('main');
    main.classList.add('about-us-container');
    let mainHeader = document.createElement('div')
    mainHeader.textContent = 'About Us'
    mainHeader.classList.add('main-header-us')
    main.appendChild(mainHeader)
 
    let aboutUsContainer = document.createElement('div')
    aboutUsContainer.classList.add('paragraph-container')

    let textContainer = document.createElement('div')
    textContainer.classList.add('text-container')
    textContainer.textContent = 'Welcome to our burger restaurant! We are excited to offer our guests a delicious and unique dining experience. Our burgers are made with fresh, high-quality ingredients and we take pride in serving up the best burgers in town.'
    aboutUsContainer.appendChild(textContainer)

    let textContainer1 = document.createElement('div')
    textContainer1.classList.add('text-container')
    textContainer1.textContent = 'Our menu features a variety of specialty burgers, including the popular bacon cheeseburger and the BBQ burger. We also have salads, sides, and desserts for those looking for something a little lighter or something sweet.'
    aboutUsContainer.appendChild(textContainer1)

    let textContainer2 = document.createElement('div')
    textContainer2.classList.add('text-container')
    textContainer2.textContent = 'We know that you will love our food as much as we do! Thanks for choosing our burger restaurant and we hope to see you soon!'
    aboutUsContainer.appendChild(textContainer2)

    main.appendChild(aboutUsContainer)
    mainBody.appendChild(main)
}
