// change theme
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
//global declaration of variables
const names = document.getElementById("resume-name") as HTMLInputElement;
const emails = document.getElementById("resume-email") as HTMLInputElement;

function generateCv(){
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
//share resume
const shareResumeButton = document.getElementById("share-url") as HTMLButtonElement;
shareResumeButton.addEventListener('click', () => {
  const baseUrl = window.location.href;
  const resumeId = btoa(`${names.value}-${emails.value}`);
  const shareableUrl = `${baseUrl}?resumeId=${resumeId}`;

  alert(`Your unique resume URL: ${shareableUrl}`);
  navigator.clipboard.writeText(shareableUrl);  // Copy the URL to clipboard
});
//convert to pdf
const downloadresume = document.getElementById("download-button");
const temName = document.getElementById("resume-name-tem") as HTMLElement;
const temEmail = document.getElementById("resume-email-tem") as HTMLElement;
const temContact = document.getElementById("resume-contact-tem" ) as HTMLElement;
const temAbout = document.getElementById("About-resume-tem") as HTMLElement;
const temExperience = document.getElementById("Experience-resume-tem") as HTMLElement;
const temSkill = document.getElementById("skills-resume-tem") as HTMLElement;
const temAchievement = document.getElementById("achievements-resume-tem" ) as HTMLElement;

downloadresume?.addEventListener('click',()=>{
  const { jsPDF } = (window as any).jspdf;
  const doc = new jsPDF();
  
  let yPos = 10;
  const lineHeight = 10; 
  
  //function to handle resume text dynamically
  function addWrappedText(doc, text, x, y, maxWidth) {
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.text(splitText, x, y);
    return splitText.length * lineHeight; 
  }
  
  yPos += addWrappedText(doc, `Name: ${temName.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `Email: ${temEmail.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `Contact: ${temContact.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `About: ${temAbout.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `Experience: ${temExperience.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `Skill: ${temSkill.textContent}`, 10, yPos, 180);
  yPos += addWrappedText(doc, `Achievements: ${temAchievement.textContent}`, 10, yPos, 180);
  
  doc.save("resume.pdf");
  
});