//Change nav style on scroll
let nav = document.getElementById("nav");
window.addEventListener('scroll', event => {
    let nav = document.querySelector('nav');
    (window.scrollY >= 50) ? nav.classList.add('nav-scrolled') : nav.classList.remove('nav-scrolled');
})

let query = document.querySelectorAll(".form-control");
// let elements = Array.from(query)

query.forEach(item => item.addEventListener('input', (event) => {
    if(event.target.id == "email") {
        ValidateEmail(event.target.value, item.parentNode) 
    }
    else {
        if(event.target.value != null) {
        item.parentNode.classList.add("validated")
        }
        if(event.target.value === "") {
            item.parentNode.classList.remove("validated")
        }
    }
}))


function ValidateEmail(mail, parent) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    parent.classList.add("validated")
    parent.classList.remove("invalid")
    return (true)
  }
  parent.classList.remove("validated")
  parent.classList.add("invalid")
    return (false)
}
