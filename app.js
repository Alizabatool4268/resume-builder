// change theme
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
//global declaration of variables
var names = document.getElementById("resume-name");
var emails = document.getElementById("resume-email");
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
//share resume
var shareResumeButton = document.getElementById("share-url");
shareResumeButton.addEventListener('click', function () {
    var baseUrl = window.location.href;
    var resumeId = btoa("".concat(names.value, "-").concat(emails.value));
    var shareableUrl = "".concat(baseUrl, "?resumeId=").concat(resumeId);
    alert("Your unique resume URL: ".concat(shareableUrl));
    navigator.clipboard.writeText(shareableUrl); // Copy the URL to clipboard
});
//convert to pdf
var downloadresume = document.getElementById("download-button");
var temName = document.getElementById("resume-name-tem");
var temEmail = document.getElementById("resume-email-tem");
var temContact = document.getElementById("resume-contact-tem");
var temAbout = document.getElementById("About-resume-tem");
var temExperience = document.getElementById("Experience-resume-tem");
var temSkill = document.getElementById("skills-resume-tem");
var temAchievement = document.getElementById("achievements-resume-tem");
downloadresume === null || downloadresume === void 0 ? void 0 : downloadresume.addEventListener('click', function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    // Initial y-axis position
    var yPos = 10;
    var lineHeight = 10; // Adjust this for line spacing between texts
    // Utility function to handle dynamic text wrapping
    function addWrappedText(doc, text, x, y, maxWidth) {
        var splitText = doc.splitTextToSize(text, maxWidth);
        doc.text(splitText, x, y);
        return splitText.length * lineHeight; // Return height of the text block
    }
    yPos += addWrappedText(doc, "Name: ".concat(temName.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "Email: ".concat(temEmail.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "Contact: ".concat(temContact.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "About: ".concat(temAbout.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "Experience: ".concat(temExperience.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "Skill: ".concat(temSkill.textContent), 10, yPos, 180);
    yPos += addWrappedText(doc, "Achievements: ".concat(temAchievement.textContent), 10, yPos, 180);
    doc.save("resume.pdf");
});
// const { jsPDF } = (window as any).jspdf
// const doc= new jsPDF();
//  doc.text(`Name: ${temName.textContent}`,10,10);
//  doc.text(`Email: ${temEmail.textContent}`,10,20);
//  doc.text(`Contact: ${temContact.textContent}`,10,30);
//  doc.text(`About: ${temAbout.textContent}`,10,40);
//  doc.text(`Experience: ${temExperience.textContent}`,10,50);
//  doc.text(`Skill: ${temSkill.textContent}`,10,60);
//  doc.text(`Achievements: ${temAchievement.innerText}`,10,70);
// doc.save("resume.pdf");
