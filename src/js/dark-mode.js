const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const toggleDarkMode= function(){
    checkbox.checked
     ? html.classList.add("dark")
     : html.classList.remove("dark"); 
}

toggleDarkMode();

checkbox.addEventListener("click", toggleDarkMode);