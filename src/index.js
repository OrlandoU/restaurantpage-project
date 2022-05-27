import pageLoad from './page-load'
import clearElement from './clear';
import header from './header';
import menu from './menu';

header()

const pageManager = (()=>{
    const rootEl  = document.querySelector(':root')
    const homeBtn = document.querySelector('.Home')
    const menuBtn = document.querySelector('.Menu')
    const aboutUs = document.querySelector('.aboutUs')

    const setup = ()=>{
        pageLoad()
        _setHomePage()
        homeBtn.addEventListener('click', _setHomePage)
        menuBtn.addEventListener('click', _setMenuPage)
        aboutUs.addEventListener('click', _setAboutUsPage)
    }
    const _setHomePage = ()=>{
        if(document.querySelector('main')){
            clearElement('main')
        }
        rootEl.classList.add('home')
        pageLoad()
    }
    const _setMenuPage = ()=>{
        document.querySelector('main').classList.add('transition')
        setTimeout(()=>clearElement('main'), 500)
        rootEl.classList.remove('home')
        setTimeout(()=>{
            menu()
            document.querySelector('main').classList.add('transition-menu')
        },500)
    }
    const _setAboutUsPage = ()=>{
        console.log('About Us')
    }
    return {setup}
})()

pageManager.setup()