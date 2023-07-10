var overV = document.getElementById("overview");
var epiS = document.getElementById("episodes");
var relA = document.getElementById("related");
var detA = document.getElementById("details");

var overVbtn = document.getElementById("overBtn");
var epiSbtn = document.getElementById("epiBtn");
var relAbtn = document.getElementById("moreBtn");
var detAbtn = document.getElementById("detailBtn");


function overviewBt() {
    overV.style.display = "block";
    epiS.style.display = "none";
    relA.style.display = "none";
    detA.style.display = "none";

    overVbtn.style.borderBottom = "2px solid rgb(148, 4, 4)";
    epiSbtn.style.borderBottom = "none";
    relAbtn.style.borderBottom = "none";
    detAbtn.style.borderBottom = "none";
}

function episodesBt() {
    overV.style.display = "none";
    epiS.style.display = "block";
    relA.style.display = "none";
    detA.style.display = "none";

    overVbtn.style.borderBottom = "none";
    epiSbtn.style.borderBottom = "2px solid rgb(148, 4, 4)";
    relAbtn.style.borderBottom = "none";
    detAbtn.style.borderBottom = "none";
}

function moreBt() {
    overV.style.display = "none";
    epiS.style.display = "none";
    relA.style.display = "block";
    detA.style.display = "none";

    overVbtn.style.borderBottom = "none";
    epiSbtn.style.borderBottom = "none";
    relAbtn.style.borderBottom = "2px solid rgb(148, 4, 4)";
    detAbtn.style.borderBottom = "none";
}

function detailBt() {
    overV.style.display = "none";
    epiS.style.display = "none";
    relA.style.display = "none";
    detA.style.display = "block";

    overVbtn.style.borderBottom = "none";
    epiSbtn.style.borderBottom = "none";
    relAbtn.style.borderBottom = "none";
    detAbtn.style.borderBottom = "2px solid rgb(148, 4, 4)";
}