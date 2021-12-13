const mobileMenu = ()=>{  
  const btnMenu = document.querySelector(".burger");
  const menuDisplay = document.querySelector(".nav-list")
 
  btnMenu.addEventListener("click",()=>{
    menuDisplay.classList.toggle("menu-active");    
  })
}

mobileMenu();