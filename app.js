function changeTheme() {
    var theme = document.querySelector("body");
    theme.style.background = "white";
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
function generateCv() {
    var name = document.getElementById("resume-name");
    var temName = document.getElementById("resume-name-tem");
    temName.innerText = name.value;
    var email = document.getElementById("resume-email");
    var temEmail = document.getElementById("resume-email-tem");
    temEmail.innerText = email.value;
    var contact = document.getElementById("resume-contact");
    var temContact = document.getElementById("resume-contact-tem");
    temContact.innerText = contact.value;
    var about = document.getElementById("About-resume");
    var temAbout = document.getElementById("About-resume-tem");
    temAbout.innerText = about.value;
    var experience = document.getElementById("Experience-resume");
    var temExperience = document.getElementById("Experience-resume-tem");
    temExperience.innerText = experience.value;
    var skill = document.getElementById("skills-resume");
    var temSkill = document.getElementById("skills-resume-tem");
    temSkill.innerText = skill.value;
    var achievement = document.getElementById("achievements-resume");
    var temAchievement = document.getElementById("achievements-resume-tem");
    temAchievement.innerText = achievement.value;
    var showtem = document.getElementById("template");
    showtem.style.display = "flex";
}
