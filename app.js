const navbar=document.querySelector("#nav")
const navBtn=document.querySelector("#nav-btn")
const closeBtn=document.querySelector("#close-btn")
const sidebar=document.querySelector("#sidebar")
const date = document.querySelector("#date")
//add fixed window to navbar
window.addEventListener("scroll", function(){
    if (this.window.scrollY > 80 ){
        navbar.classList.add("navbar-fixed")
    } else {
        navbar.classList.remove("navbar-fixed")
    }
})

//show navbar
navBtn.addEventListener("click", function(){
    sidebar.classList.add("show-sidebar")
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})


//set year
 date.innerHTML=new Date().getFullYear();