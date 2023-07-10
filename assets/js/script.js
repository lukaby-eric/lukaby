

var mySkill = document.getElementById("skills");
var myPers = document.getElementById("personal");
var skillBtn = document.getElementById("coding-btn");
var edBtn = document.getElementById("personal-btn");
var moreworks= document.getElementById("more-works");
var resume = document.getElementById("resume");

// mavbar


function codingskills() {
    mySkill.style.display="block";
    myPers.style.display="none";
    skillBtn.style.borderBottom="2px solid rgb(3, 33, 58)";
    edBtn.style.borderBottom="none";
}

function personalskills() {
    mySkill.style.display="none";
    myPers.style.display="block";
    edBtn.style.borderBottom="2px solid rgb(3, 33, 58)";
    skillBtn.style.borderBottom="none";
}

function openCv() {
    resume.style.transform="scale(1,1)";
}
function closeCv() {
    resume.style.transform="scale(0,0)";
}