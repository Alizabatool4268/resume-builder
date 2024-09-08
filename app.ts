function changeTheme(){
    const theme = document.querySelector("body") as HTMLBodyElement
    theme.style.background="white";
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
function generateCv() {
  const name = document.getElementById("resume-name") as HTMLInputElement;
  const temName = document.getElementById("resume-name-tem") as HTMLElement;
  temName.innerText = name.value;

  const email = document.getElementById("resume-email") as HTMLInputElement;
  const temEmail = document.getElementById("resume-email-tem") as HTMLElement;
  temEmail.innerText = email.value;

  const contact = document.getElementById("resume-contact") as HTMLInputElement;
  const temContact = document.getElementById("resume-contact-tem" ) as HTMLElement;
  temContact.innerText = contact.value;

  const about = document.getElementById("About-resume") as HTMLTextAreaElement;
  const temAbout = document.getElementById("About-resume-tem") as HTMLElement;
  temAbout.innerText = about.value;

  const experience = document.getElementById("Experience-resume") as HTMLTextAreaElement;
  const temExperience = document.getElementById("Experience-resume-tem") as HTMLElement;
  temExperience.innerText = experience.value;

  const skill = document.getElementById("skills-resume") as HTMLTextAreaElement;
  const temSkill = document.getElementById("skills-resume-tem") as HTMLElement;
  temSkill.innerText = skill.value;

  const achievement = document.getElementById("achievements-resume") as HTMLTextAreaElement;
  const temAchievement = document.getElementById("achievements-resume-tem" ) as HTMLElement;
  temAchievement.innerText = achievement.value;

  const showtem = document.getElementById("template") as HTMLDivElement;
  showtem.style.display = "flex";
}
