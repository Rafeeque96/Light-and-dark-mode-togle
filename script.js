//Dom elements
const toggleSwitchEl= document.querySelector('input[type="checkbox"]')
//console.log(toggleSwitchEl)



//stich theme
function switchTheme(){
    //console.log(this) 
    this.checked 
    ? document.documentElement.setAttribute("data-theme", "dark")
    : document.documentElement.setAttribute("date-theme", "light");
}







//Add event listener
toggleSwitchEl.addEventListener("change", switchTheme)