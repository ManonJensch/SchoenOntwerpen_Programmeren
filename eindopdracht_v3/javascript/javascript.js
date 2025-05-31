console.log("Javascript werkt!");


const achtergrondKnop = document.getElementById("achtergrondKnop");
const homeSchoenOntwerpenKnop = document.getElementById("homeKeuze");
const bevestigKnop = document.getElementById("eindKeuzeKnop");
const schoenButton = document.getElementById("schoenButton");
const buitenkantButton = document.getElementById("buitenkantButton");
const detailButton = document.getElementById("detailButton");
const zoolButton = document.getElementById("zoolButton");
const binnenkantButton = document.getElementById("binnenkantButton");
const eindResultaat = document.getElementById("eindScherm");


const pilaarAfbeelding2 =  document.getElementById("pilaarAfbeelding2");
const volgendeSchoenButton = document.getElementById("volgendeKnop");

//----------------------------- arrays ---------------------------------
const verschillendeTypes = ["type1", "type2", "type3", "type4", "type5", "type6"];
let schoenIndex = 0;

const verschillendeBuitenkanten = ["buitenkant1", "buitenkant2", "buitenkant3", "buitenkant4", "buitenkant5", "buitenkant6"];
let buitenkantIndex = 0;

const verschillendeDetail = ["detail1", "detail2", "detail3", "detail4", "detail5", "detail6"];
let detailIndex = 0;

const verschillendeZool = ["zool1", "zool2", "zool3", "zool4", "zool5", "zool6"];
let zoolIndex = 0;

const verschillendeBinnenkant = ["binnenkant1", "binnenkant2", "binnenkant3", "binnenkant4", "binnenkant5", "binnenkant6"];
let binnenkantIndex = 0;

let achtergrondVeranderen = ["url(/afbeeldingen/achtergrond3.jpg)", "url(/afbeeldingen/achtergrond2.jpg)", "url(/afbeeldingen/achtergrond1.jpg)"];
let volgendeKnop = document.getElementById("volgendeKnop");

// met hulp van chatgpt
let huidigeVolgendeFunctie = veranderSchoenVolgende;
// einde

let testConsole = "wit";


// met hulp van Google -- achtergrond muziek
//link: https://pixabay.com/nl/music/funk-groovy-ambient-funk-201745/
document.getElementById("achtergrondMuziek").volume = 0.5;

//----------------------------- functions wisselen van scherm ---------------------------------
// geholpen door Anne
function wisselHome(){
    document.getElementById("home").style.display = "none";
    document.getElementById("schoenSoortKiezen").style.display = "block";
}

function wisselEindscherm(){
    document.getElementById("schoenSoortKiezen").style.display = "none";
    document.getElementById("eindScherm").style.display = "block";
    document.body.style.backgroundImage = "url(/afbeeldingen/confetti.jpg)";
    const veranderTitel = document.getElementById("veranderTitel");
    veranderTitel.textContent = "Jouw eindresultaat! Geweldig!";
}
// einde

//----------------------------- functions afbeelding veranderen ---------------------------------
function veranderSchoenVolgende(){
    schoenIndex++;
    if (schoenIndex >= verschillendeTypes.length){
        schoenIndex = 0;
    }
    pilaarAfbeelding2.src = "afbeeldingen/" + verschillendeTypes[schoenIndex] + ".png";
}

function veranderBuitenkantVolgende(){
    buitenkantIndex++;
    if (buitenkantIndex >= verschillendeBuitenkanten.length){
        buitenkantIndex = 0;
    }
    pilaarAfbeelding2.src = "afbeeldingen/" + verschillendeBuitenkanten[buitenkantIndex] + ".png";
}

function veranderDetailVolgende(){
    detailIndex++;
    if (detailIndex >= verschillendeDetail.length){
        detailIndex = 0;
    }
    pilaarAfbeelding2.src = "afbeeldingen/" + verschillendeDetail[detailIndex] + ".png";
}

function veranderZoolVolgende(){
    zoolIndex++;
    if (zoolIndex >= verschillendeZool.length){
        zoolIndex = 0;
    }
    pilaarAfbeelding2.src = "afbeeldingen/" + verschillendeZool[zoolIndex] + ".png";
}

function veranderBinnenkantVolgende(){
    binnenkantIndex++;
    if (binnenkantIndex >= verschillendeBinnenkant.length){
        binnenkantIndex = 0;
    }
    pilaarAfbeelding2.src = "afbeeldingen/" + verschillendeBinnenkant[binnenkantIndex] + ".png";
}

//----------------------------- function achtergrond aanpassen ---------------------------------
function achtergrondAanpassen(){
    let randomAchtergrondNummer = Math.floor(Math.random()*3);
    let gekozenAchtergrond = achtergrondVeranderen[randomAchtergrondNummer];
    document.body.style.backgroundImage = gekozenAchtergrond;
}

if (testConsole === "gekleurd"){
    console.log("Je hebt een kleur gekozen voor je schoen!");
} else {
    console.log("Je schoen is wit, kies een kleur...");
}

//----------------------------- keuze buttons ---------------------------------
function kiesType() {
    console.log("kies schoen type");
}

function kiesBuitenkant() {
    console.log("kies binnekant kleur");
}

function kiesDetail() {
    console.log("kies detail kleur");
}

function kiesZool() {
    console.log("kies zool kleur ");
}

function kiesBinnenkant() {
    console.log("kies buitenkant kleur");
}

function vorigeButton(){
    console.log("vorige button");
}

function volgendeButton(){
    console.log("volgende button");
}

//----------------------------- EventListeners ---------------------------------
// met hulp van chatgpt
homeSchoenOntwerpenKnop.addEventListener("click", () => {
    document.getElementById("achtergrondMuziek").play();
    wisselHome();
});
// einde hulp

achtergrondKnop.addEventListener("click", achtergrondAanpassen);
volgendeSchoenButton.addEventListener("click", veranderSchoenVolgende);
bevestigKnop.addEventListener("click", wisselEindscherm);

//met hulp van chatgpt 
//prompt: ik wil dat als ik op de buitenkant button klik dat ik dan van de veranderSchoenVolgende naar veranderBuitenkantVolgende ga
//Dit is ook een methode die we hebben behandeld in de les, de anonieme functies binnen een parameter
volgendeKnop.addEventListener("click", () => {
    huidigeVolgendeFunctie();
});

schoenButton.addEventListener("click", () => {
    console.log("Je hebt het schoentype geselecteerd.");
    huidigeVolgendeFunctie = veranderSchoenVolgende;
    schoenButton.style.backgroundColor = "white";
    schoenButton.style.color = "rgb(198, 92, 108)";
});

buitenkantButton.addEventListener("click", () => {
    console.log("Je hebt de buitenkant geselecteerd.");
    huidigeVolgendeFunctie = veranderBuitenkantVolgende;
    buitenkantButton.style.backgroundColor = "white";
    buitenkantButton.style.color = "rgb(198, 92, 108)";
});

detailButton.addEventListener("click", () => {
    console.log("Je hebt de buitenkant geselecteerd.");
    huidigeVolgendeFunctie = veranderDetailVolgende;
    detailButton.style.backgroundColor = "white";
    detailButton.style.color = "rgb(198, 92, 108)";
});

zoolButton.addEventListener("click", () => {
    console.log("Je hebt de buitenkant geselecteerd.");
    huidigeVolgendeFunctie = veranderZoolVolgende;
    zoolButton.style.backgroundColor = "white";
    zoolButton.style.color = "rgb(198, 92, 108)";
});

binnenkantButton.addEventListener("click", () => {
    console.log("Je hebt de buitenkant geselecteerd.");
    huidigeVolgendeFunctie = veranderBinnenkantVolgende;
    binnenkantButton.style.backgroundColor = "white";
    binnenkantButton.style.color = "rgb(198, 92, 108)";
});
// einde hulp chatgpt

