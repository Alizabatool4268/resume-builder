function changeTheme(){
    const theme = document.querySelector("body") as HTMLBodyElement
    theme.style.background="pink";
}
function dafaultTheme(){
    const defTheme =document.querySelector("body") as HTMLBodyElement
    defTheme.style.background="black"
}
function hide(){
const hideExperience = document.getElementsByClassName("sec-exp")[0] as HTMLBodyElement
hideExperience.style.display="none"
}
function show(){
const showExperience = document.getElementsByClassName("sec-exp")[0] as HTMLBodyElement
showExperience.style.display="block"
}