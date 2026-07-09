console.log("GrowEveryday Loaded Successfully 🌱");

window.onload = function(){

    let savedJournal =
    localStorage.getItem("journal");

    if(savedJournal){

        document.getElementById("journalText").value =
        savedJournal;
        
    }
}
let savedTheme =
localStorage.getItem("theme");

if(savedTheme){

    document.body.className =
    savedTheme;

    let themeBtn = document.getElementById("themeBtn");

    if(document.body.classList.contains("dark")){
        themeBtn.innerText = "☀️ Light Mode";
    }
}
function welcomeUser() {
    alert("Welcome to GrowEveryday 🌱");
}
let water = 0;
function drinkWater() {

    if (water < 8) {

        water++;
        
        document.getElementById("waterCount").innerText =
        water + " / 8 Glass";

        document.getElementById("progressFill").style.width =
        (water / 8) * 100 + "%";
    }
    if (water === 8) {
        alert("  🎉 Amazing Sameer! You completed today's water goal.");
    }
}
function toggleTheme(){
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.className
    );
    let themeBtn = document.getElementById("themeBtn")

    if(document.body.classList.contains("dark")){

        themeBtn.innerText = "☀️ Light Mode";

    }else{

        themeBtn.innerText = "🌙 Dark Mode";
    }

}

function saveJournal(){

    let text =
    document.getElementById("journalText").value;

    localStorage.setItem(
        "journal",
        text
    );

    alert("Journal Saved ✅");
}
