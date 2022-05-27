export default function clearElement(element){
    let el = document.querySelector(element);
    el.parentElement.removeChild(el)
}