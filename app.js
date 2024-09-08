function changeTheme() {
    var theme = document.querySelector("body");
    theme.style.background = "pink";
}
function dafaultTheme() {
    var defTheme = document.querySelector("body");
    defTheme.style.background = "black";
}
function hide() {
    var hideExperience = document.getElementsByClassName("sec-exp")[0];
    hideExperience.style.display = "none";
}
function show() {
    var showExperience = document.getElementsByClassName("sec-exp")[0];
    showExperience.style.display = "block";
}
