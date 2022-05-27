const mainBody = document.querySelector('#content');

const menuOptions = [
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Cheese Burger',
        ingredients: 'Beef Patty, Cheddar Cheese, Grilled onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$2.95',
        img: './cheeseburger.png'
    },
    {
        name: 'Beef Bacon',
        ingredients: 'Beef Patty, Cheddar Cheese, Beef Bacon, Grilled Onions & Tomatoes Pickles, Lettuce, Ketchup, Mayo and Mustard',
        price: '$2.95',
        img: './beefbacon.png'
    },
    {
        name: 'Creamy Mushroom',
        ingredients: 'Beef Patty, Cream of Mushroom, Mozzarella Cheese, Grilled Onions, Mayo',
        price: '$2.95',
        img: './creamymushroom.png'
    },
    {
        name: 'Hawaiian Burger',
        ingredients: 'Beef Patty, Grilled Pineapple,Mozzarella Cheese, Onions, Tomatoes, Lettuce, Mayo, BBQ sauce',
        price: '$2.95',
        img: './hawaiian.png'
    },
    {
        section: true,
        name: 'Spicy Tandoori',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    },
    {
        name: 'Beef Burger',
        ingredients: 'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, ketchup, Mayo,mustard',
        price: '$2.95',
        img: './placeholder-removebg-preview.png'
    }
]
export default function menu() {
    let main = document.createElement('main')
    main.classList.add('menu-container')
    let mainHeader = document.createElement('div')
    mainHeader.textContent = 'Customer Favourites'
    mainHeader.classList.add('main-header')
    main.appendChild(mainHeader)

    let section1 = document.createElement('div')
    let insection1 = document.createElement('div')
    section1.classList.add('beef-section')
    insection1.classList.add('beef-section-text')
    insection1.textContent = 'Beef Burgers'
    section1.appendChild(insection1)
    main.appendChild(section1)


    menuOptions.forEach((item) => {
        if (item.section) {
            let section2 = document.createElement('div')
            let insection2 = document.createElement('div')
            section2.classList.add('chicken-section')
            insection2.classList.add('chicken-section-text')
            insection2.textContent = 'Chicken Burgers'
            section2.appendChild(insection2)
            main.appendChild(section2)
        }

        let itemContainer = document.createElement('div')
        itemContainer.classList.add('item-container')
        let img = document.createElement('img')
        img.src = item.img
        itemContainer.appendChild(img)

        let priceContainer = document.createElement('div')
        priceContainer.classList.add('price-container')
        let price = document.createElement('section')
        price.classList.add('price')
        price.textContent = item.price
        let highlight = document.createElement('div')
        highlight.classList.add('more-info')
        highlight.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>'
        let ingredients = document.createElement('section')
        ingredients.classList.add('ingredients-container')

        let ingredientsItem = document.createElement('div')
        ingredientsItem.classList.add('ingredients')
        ingredientsItem.textContent = item.ingredients

        priceContainer.appendChild(price)
        ingredients.appendChild(highlight)
        ingredients.appendChild(ingredientsItem)

        priceContainer.appendChild(ingredients)
        itemContainer.appendChild(priceContainer)

        let nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        let name = document.createElement('section')
        name.classList.add('name')
        name.textContent = item.name
        let button = document.createElement('div')
        button.classList.add('item-button')
        button.textContent = 'Add'
        nameContainer.appendChild(name)
        nameContainer.appendChild(button)
        itemContainer.appendChild(nameContainer)


        main.appendChild(itemContainer)
    })
    mainBody.appendChild(main)
};